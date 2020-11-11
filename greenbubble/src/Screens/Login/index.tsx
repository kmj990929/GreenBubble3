import React, {useContext, useEffect, useState} from 'react';
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
  const [emailV, setEmail]= useState<string>("");
  const [passwordV, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const getDataUsingSimpleGetCall = () => {    
    //10.0.2.2
    //127.0.0.1
    axios.post('http://10.0.2.2:8000/signin', 
      {
        user_email: emailV,
        user_password: passwordV,
      })
      .then(({ data }) => {
        setIsLogin(data.loginSuccess);
        console.log("success");
        console.log(data.loginSuccess);
        //console.log(JSON.stringify(response.data));
      })
      //.then(function (response) {
     // })
      .catch(function (error) {
        // handle error
        console.log(error.message);
        //console.log(error.response.request._response);
      })
      .finally(function () {
        // always executed
        console.log('Finally called');
      });
  };

  useEffect(() => {
    
  }, [isLogin]);

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
            <InputLogin placeholder={"Email"} onChangeText={(emailV) => setEmail(emailV)} value={emailV}  />
        
          </InputContainer>

          <InputContainer>
          <ImageContainer>
            <Image style={{width:20, height:20}} source={require('~/Assets/Images/lock.png')}/></ImageContainer>
            <InputLogin placeholder={"Password"} secureTextEntry={true} 
                        onChangeText={(passwordV) => setPassword(passwordV)} value={passwordV}  />
          </InputContainer>

          <Button label="Forgot Password?" onPress={() => navigation.navigate('FindPassword')} />
          <Footer> 
          <OkButton label="Login" 
                    onPress={() => {getDataUsingSimpleGetCall()}}/>
            <OkButton label="Login" onPress={() => {console.log(emailV);}}/>
            <Button label="Sign Up" onPress={() => navigation.navigate('SignUp')}/>
          </Footer>  
        </KeyboardAwareScrollView> 
        </TouchableWithoutFeedback>
      
    </Container>
  );
};//console.log(login);
//<OkButton label="Login" onPress={() => {login(email, password); }}/>

export default Login;

/*
  const getDataUsingSimpleGetCall = () => {
    axios   
    //10.0.2.2
    //127.0.0.1
      .post('http://10.0.2.2:8000/signin', 
      {
        user_email: emailV,
        user_password: passwordV,
      })
      .then(function (response) {
        //JSON.stringify(response.data);
        console.log(JSON.stringify(response.data));
        console.log("success");

        if(loginSuccess){
          //friendsList로
        }else{
          console.log("login error");
          //로그인 에러 
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
        //console.log(error.response.request._response);
      })
      .finally(function () {
        // always executed
        console.log('Finally called');
      });
  };

*/