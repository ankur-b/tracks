import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'native-base';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{top:'always'}}> 
      <Spacer>
        <Text style={{fontSize: 48}}>Account Screen</Text>
      </Spacer>
      <Spacer>
        <Button full primary onPress={signout}>
          <Text>Sign Out</Text>
        </Button>
      </Spacer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default AccountScreen;
