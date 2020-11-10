import React, {useContext, useState} from 'react';
import Styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
//import { fetch } from 'react-native';
import axios from 'axios';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MyContext} from '~/Context/Me';
//import {NativeRouter, Route, Link, useHistory} from 'react-router-native';

import InputLogin from '~/Components/Input/InputLogin';
import OkButton from  '~/Components/Button/OkButton';
import Button from '~/Components/Button';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Label = Styled.Text``;

const LogoContainer = Styled.View`
  margin-top: 120px;
  margin-bottom: 20px;
  align-items: center;
  margin-bottom: 40px;
`;

const Image = Styled.Image``;
const ImageContainer = Styled.View`
    align-items: center;
    width: 22px;
    height: 22px;
    margin-top: 20px;
    margin-right: 10px;
`;

const InputContainer = Styled.View`
  flex-direction: row;
  background-color: white;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 85%;
  height: 40px;
`;

const Footer = Styled.View`
    width: 100%;
    margin-top: 50px;
    align-items: center;
`;

type NavigationProp = StackNavigationProp<LoginStackNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

  const Login = ({navigation}: Props) => {
  const {login} = useContext<IMyContext>(MyContext);
  const [email, setEmail]= useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const getDataUsingSimpleGetCall = (email: string, password: string) => {
    axios   
    //10.0.2.2
    //127.0.0.1
      //.get('https://jsonplaceholder.typicode.com/posts/1')
      //.get('users.url')
      .get('http://10.0.2.2:8000/users.url/signin/login')
      .then(function (response) {
        //JSON.stringify(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
        console.log(error.status);
      })
      .finally(function () {
        // always executed
        console.log('Finally called');
      });
  };
/*
  fetch( , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({})
  })
  .then((response) => {
    if(response.ok){ //성공하면
      localStorage.setItem('access-token', response.access_token); //로컬에 토큰저장

    }else{

    }
  })
  .catch((err) => {
    console.log(err);
  })
*/



  return (
    <Container>
      <LogoContainer>
        <Image style={{width:190, height:125}} source={require('~/Assets/Images/loginLogo.png')}/>
      </LogoContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView>

          <InputContainer>
            <ImageContainer>
            <Image style={{width:20, height:20}} source={require('~/Assets/Images/user.png')}/></ImageContainer> 
            <InputLogin placeholder={"Email"} onChangeText={(email) => setEmail(email)} value={email}  />
        
          </InputContainer>

          <InputContainer>
          <ImageContainer>
            <Image style={{width:20, height:20}} source={require('~/Assets/Images/lock.png')}/></ImageContainer>
            <InputLogin placeholder={"Password"} secureTextEntry={true} 
                        onChangeText={(password) => setPassword(password)} value={password}  />
          </InputContainer>

          <Button label="Forgot Password?" onPress={() => navigation.navigate('FindPassword')} />
          <Footer> 
          <OkButton label="Login" 
                onPress={() => {getDataUsingSimpleGetCall(email, password)}}/>
            <OkButton label="Login" onPress={() => {console.log(email);}}/>
            <Button label="Sign Up" onPress={() => navigation.navigate('SignUp')}/>
          </Footer>  
        </KeyboardAwareScrollView> 
        </TouchableWithoutFeedback>
      
    </Container>
  );
};//console.log(login);
//<OkButton label="Login" onPress={() => {login(email, password); }}/>

export default Login;