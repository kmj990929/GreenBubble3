import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MyContext} from '~/Context/Me';

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
            <InputLogin placeholder={"Email"}/>
          </InputContainer>

          <InputContainer>
          <ImageContainer>
            <Image style={{width:20, height:20}} source={require('~/Assets/Images/lock.png')}/></ImageContainer>
            <InputLogin placeholder={"Password"}/>
          </InputContainer>

          <Button label="Forgot Password?" onPress={() => navigation.navigate('FindPassword')} />
          <Footer> 
            <OkButton label="Login" onPress={() => {
                                                   login('email@gmail.com', 'password');
                                                   console.log(login);}}
            />
            <Button label="Sign Up" onPress={() => navigation.navigate('SignUp')}/>
          </Footer>  
        </KeyboardAwareScrollView> 
        </TouchableWithoutFeedback>
      
    </Container>
  );
};

export default Login;