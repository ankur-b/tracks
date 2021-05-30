import React, {useEffect, useContext} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Text} from 'native-base';
import {Context as TrackContext} from '../context/TrackContext';
const TrackListScreen = ({navigation}) => {
  const {state, fetchTracks} = useContext(TrackContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchTracks();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View>
      <Text style={{fontSize: 48}}>Track List Screen</Text>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TrackDetail',{_id:item._id});
              }}>
              <Text>{item.name}</Text>
              <Text>{item._id}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default TrackListScreen;
