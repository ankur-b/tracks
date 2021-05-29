import '../_mockLocation'
import React, {useContext,useCallback} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackForm'
const TrackCreateScreen = () => {
  const { state,addLocation} = useContext(LocationContext)
  const isFocused = useIsFocused();
  const callback = useCallback(location=>{
    addLocation(location,state.recording)
  },[state.recording])
  const [err] = useLocation(isFocused||state.recording,callback)
  console.log(isFocused)
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 48}}>Create a Track</Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default TrackCreateScreen;
