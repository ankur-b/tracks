import { CommonActions } from '@react-navigation/native';

export const navigate = ({routeName,params,navigation}) =>{
    navigation.dispatch(
        CommonActions.navigate({
            routeName,
            params
        })
    )
}