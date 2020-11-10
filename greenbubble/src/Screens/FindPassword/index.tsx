import React from 'react';
import Styled from 'styled-components/native';
import InputInfo from '~/Components/Input/InputInfo';
import OkButton from  '~/Components/Button/OkButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';

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
  return (
     
    <Container>
        <OuterContainer>
            <Label>Forget{"\n"}Password?</Label>
            <KeyboardAwareScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <InnerContainer>
                <SmallLabel>{"Email"}</SmallLabel> 
                <InputInfo placeholder={"사용자의 이메일을 입력하세요."} />
                <Footer><OkButton label="Complete!"/></Footer>
            </InnerContainer>
            </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
      </OuterContainer>
    </Container>
    
  );
};

export default FindPassword;