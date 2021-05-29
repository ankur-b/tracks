import React, {useState, useEffect,useContext} from 'react';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item,
  Input,
  Label,
  Title,
} from 'native-base';
import { AsyncStorage } from '@react-native-community/async-storage';
import {NavigationEvents} from '@react-navigation/native'
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
const SigninScreen = ({navigation}) => {
  const {state, signin,clearErrorMessage} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearErrorMessage()
    });

    return unsubscribe;
  }, [navigation])
  return (
    <Container>
      <Header>
        <Body>
          <Title>SignIn</Title>
        </Body>
      </Header>
      <Form>
        <Spacer>
          <Text style={{fontSize: 30}}>Sign Up for Tracker</Text>
        </Spacer>
        <Item fixedLabel>
          <Label>Email</Label>
          <Input value={email} onChangeText={setEmail} />
        </Item>
        <Spacer />
        <Item fixedLabel last>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </Item>
        <Spacer />
        {state.errorMessage ? <Text style={{fontSize:16,color:'red',marginLeft:15,marginTop:15}}>{state.errorMessage}</Text>:null}
        <Button
          full
          primary
          style={{marginVertical: 20}}
          onPress={() => signin({email, password})}>
          <Text> Sign In </Text>
        </Button>
        <Text style={{fontSize: 20, marginHorizontal: 20}}>
          If not registered?
        </Text>
        <Spacer />
        <Button full primary onPress={()=>navigation.navigate('Signup')}>
          <Text> Sign Up </Text>
        </Button>
      </Form>
    </Container>
  );
};
export default SigninScreen;
