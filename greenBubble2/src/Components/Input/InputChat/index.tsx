//로그인 화면에서 비번, 패스워드 입력창
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width: 95%;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const InputField = Styled.TextInput`
    width: 90%;
    height: 45px;
    background-color: #DBE8DF;
    border-radius: 30px;
    border-width: 0.1px;
    padding-left: 15px;
    margin-left: 10px;
    margin-right: 7px;
`;

const Enter = Styled.Image``;
const EnterContainer = Styled.View`
    width: 10%;
    height: 40px;
    border-radius: 100px;
    padding-left: 3px;
    margin-top: 3px;
    background-color: #80CBC4;
`;

interface Props {
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    style?: Object; 
    clearMode?: boolean; //사용자가 입력할 때, 전체 삭제 버튼을 표시할지
    onChangeText?: (text: string) => void; //입력창 내용이 변경될 때, 호출되는 콜백함수
 }

 const InputChat = ({
     keyboardType,
     secureTextEntry,
     style,
     clearMode,
     onChangeText,
 }: Props) => {
     
     return (
         <Container style = {style}>
             <InputField
                selectionColor = "#292929"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType ? keyboardType : 'default'}
                autoCapitalize = "none"
                autoCorrect ={false}
                allowFontScaling={true}
                clearButtonMode={clearMode ? 'while-editing' : 'never'}
                onChangeText={onChangeText}
            />
            <EnterContainer><Enter source={require('~/Assets/Images/send.png')} /></EnterContainer>    
         </Container>
     );
 };

 export default InputChat;