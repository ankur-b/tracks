import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createSwitchNavigator} from '@react-navigation/compat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import {Context as AuthContext} from './src/context/AuthContext';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
const LoginStack = createStackNavigator();
const TrackStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TrackStackScreen = () => {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackStack.Navigator>
  );
};
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LoginStack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
      <LoginStack.Screen name="Signup" component={SignupScreen} />
      <LoginStack.Screen name="Signin" component={SigninScreen} />
    </LoginStack.Navigator>
  );
};
const MainFlowStackScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tracks" component={TrackStackScreen} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
const Stacks = () => {
  const {state} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {console.log(state)}
      {state.token ? <MainFlowStackScreen /> : <LoginStackScreen />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <Stacks />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
export default App;
