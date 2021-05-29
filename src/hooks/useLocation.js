import {useState, useEffect} from 'react';
import {Accuracy, watchPositionAsync} from 'expo-location';
import {PermissionsAndroid} from 'react-native';
export default (shouldTrack,callback) => {
  const [err, setErr] = useState(null);
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location',
            message: 'Fine Location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback,
        );
      } catch (e) {
        setErr(e);
      }
    }; 
    if (shouldTrack){
        startWatching();
    }else{
        if(subscriber){
          subscriber.remove()
        }
        subscriber = null
    }
    return()=>{
      if(subscriber){
        subscriber.remove()
      }
    }
  }, [shouldTrack,callback]);
  return [err]
};
