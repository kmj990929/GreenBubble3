import React, {useState} from 'react';
import Styled from 'styled-components/native';
import InputInfo from '~/Components/Input/InputInfo';
import OkButton from  '~/Components/Button/OkButton';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
    margin-top: 80px;
    align-items: center;
`;

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail]= useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const getDataUsingSimpleGetCall = () => {
    axios   
    //10.0.2.2
    //127.0.0.1
      .post('http://10.0.2.2:8000/signup', 
      {
        user_name: name,
        user_email: email,
        user_password: password,
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
            <Label>Sign Up!</Label>
            <KeyboardAwareScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <InnerContainer>
                  <SmallLabel>{"Email"}</SmallLabel> 
                  <InputInfo placeholder={"사용자의 이메일을 입력하세요."} 
                                onChangeText={(email) => setEmail(email)} value={email} />

                  <SmallLabel>{"Name"}</SmallLabel> 
                  <InputInfo placeholder={"이름을 입력하세요."}  
                          onChangeText={(name) => setName(name)} value={name}/>

                  <SmallLabel>{"Password"}</SmallLabel> 
                  <InputInfo placeholder={"8~16자리 비밀번호를 입력하세요."}  
                          onChangeText={(password) => setPassword(password)} value={password}/>

                  <SmallLabel>{"Password2"}</SmallLabel> 
                  <InputInfo placeholder={"비밀번호를 한 번 더 입력하세요."} 
                            onChangeText={(password2) => setPassword2(password2)} value={password2}/>
                  <OkButton label="Complete!"
                                    onPress={()=> {console.log(name)}}/>
                  <Footer><OkButton label="Complete!"
                                    onPress={()=> {getDataUsingSimpleGetCall()}}
                  /></Footer>
            </InnerContainer>
            
            </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
      </OuterContainer>
    </Container>
    
  );
};

export default SignUp;