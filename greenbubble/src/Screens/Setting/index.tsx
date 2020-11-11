import React, {useState} from 'react';
import Styled from 'styled-components/native';
import {Alert} from 'react-native';
import OkButton from  '~/Components/Button/OkButton';
import SettingButton from '~/Components/Button/SettingButton';

import {StackNavigationProp} from '@react-navigation/stack';


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
    height: 90%;
`;

const Label = Styled.Text`
    color: black;
    fontWeight: bold;
    text-align: left;
    font-size: 24px;
    margin-top: 40px;
`;

const Footer = Styled.View`
    width: 100%;
    margin-top: 270px;
    align-items: center;
`;

const ModalText = Styled.Text`
  font-size: 16pt;
  font-weight: bold;
   margin-top: 20px;
`;


type NavigationProp = StackNavigationProp<SettingParamList, 'Setting'>;
interface Props {
  navigation: NavigationProp;
}


const Setting = ({navigation}:Props) => {
  const WithdrawAlert = () =>{
    Alert.alert(
      "alert title",
      "my alert msg",
      [
          {
            text: "YES",
            onPress: () => console.log("yes"),
          },
          {
            text: "NO",
            onPress: () => console.log("NO");
            style: "cancel"
          }
      ],
      {cancelable: false}
    );

  }
  return (
     
    <Container>
        <OuterContainer>

            <Label>Setting</Label>
              <InnerContainer>
                  <SettingButton  label="개발자 정보" onPress={() => { navigation.navigate('DevInfo');}}/>
                  <SettingButton label="로그아웃" onPress={() => { navigation.navigate('Login');}}/>
                  <Footer><OkButton label="탈퇴하기.." onPress={() => {WithdrawAlert}}/></Footer>


            </InnerContainer>
      
      </OuterContainer>
    </Container>
    
  );
};

export default Setting;