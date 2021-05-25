import React, {useState, useContext} from 'react';
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
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
const SignupScreen = () => {
  const {state, signup} = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <Header>
        <Body>
          <Title>SignUp</Title>
        </Body>
      </Header>
      <Form>
        <Spacer>
          <Text style={{fontSize: 30}}>Sign Up for Tracker</Text>
        </Spacer>
        <Item fixedLabel>
          <Label>First Name</Label>
          <Input value={firstName} onChangeText={setFirstName} />
        </Item>
        <Spacer />
        <Item fixedLabel>
          <Label>Last Name</Label>
          <Input value={lastName} onChangeText={setLastName} />
        </Item>
        <Spacer />
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
          onPress={() => signup({firstName, lastName, email, password})}>
          <Text> Sign Up </Text>
        </Button>
        <Text style={{fontSize: 20, marginHorizontal: 20}}>
          Already a User?
        </Text>
        <Spacer />
        <Button full primary>
          <Text> Sign In </Text>
        </Button>
      </Form>
    </Container>
  );
};
export default SignupScreen;
