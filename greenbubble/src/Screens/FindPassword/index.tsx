import React, { useState} from 'react';
import Styled from 'styled-components/native';
import InputInfo from '~/Components/Input/InputInfo';
import OkButton from  '~/Components/Button/OkButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import axios from 'axios';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #87C598;
`;
const OuterContainer = Styled.View`
    flex: 2;
    width: 100%;
    padding: 13px;
    background-color: #87C598; 
    border-radius: 30px;
    margin-bottom: -10px;
`;

const InnerContainer = Styled.View`
    flex: 1;
    width: 100%;
    margin-top: 20px;
    padding:25px;
    background-color: #FFFFFF; 
    border-radius: 30px;
`;

const Label = Styled.Text`
    color: black;
    fontWeight: bold;
    text-align: left;
    font-size: 24px;
    margin-top: 40px;
`;

const SmallLabel = Styled.Text`
    font-size: 16px;
    fontWeight: bold;
`;

const Footer = Styled.View`
    width: 100%;
    margin-top: 250px;
    align-items: center;
`;

const FindPassword = () => {
  const [inputPW, setInputPW] = useState<string>("");

  const getDataUsingSimpleGetCall = () => {
    axios   
      .post('http://10.0.2.2:8000/forgetpw', 
      {
        password: inputPW,
      })
      .then(function (response) {
        //JSON.stringify(response.data);
        console.log(JSON.stringify(response.data));
        console.log("success");
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


  return (
     
    <Container>
        <OuterContainer>
            <Label>Forget{"\n"}Password?</Label>
            <KeyboardAwareScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <InnerContainer>
                <SmallLabel>{"Email"}</SmallLabel> 
                <InputInfo placeholder={"사용자의 이메일을 입력하세요."} 
                            onChangeText={(inputPW) => setInputPW(inputPW)}/>
                <Footer><OkButton label="Complete!" onPress={() => {getDataUsingSimpleGetCall()}}/></Footer>
            </InnerContainer>
            </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
      </OuterContainer>
    </Container>
    
  );
};

export default FindPassword;