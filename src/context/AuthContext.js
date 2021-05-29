import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: '', token: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'signout':
      return {...state, token:null}
    default:
      return state;
  }
};
const tryLocalSignin = dispatch => async ({navigation}) => { 
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token});
  }else{
    navigation.navigate('Signup')
  }
};
const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message', payload: ''});
};
const signup =
  dispatch =>
  async ({firstName, lastName, email, password}, callback) => {
    console.log(firstName, lastName, email, password);
    try {
      const response = await trackerApi.post('/signup', {
        firstName,
        lastName,
        email,
        password,
      });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signup', payload: response.data.token});
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with signup',
      });
    }
  };

const signin =
  dispatch =>
  async ({email, password}) => {
    console.log(email, password);
    try {
      const response = await trackerApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
    } catch (err) {
      console.log('ss');
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
    }
  };
const signout = dispatch => async() => {
  await AsyncStorage.removeItem('token');
  dispatch({type:'signout'})
};
export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: ''},
);
