import React, {useEffect,useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen = ({navigation}) =>{
    const {tryLocalSignin} = useContext(AuthContext);
    useEffect(()=>{
        tryLocalSignin({navigation})
        console.log("resolve stuck")
    },[])
    return null
}
export default ResolveAuthScreen;