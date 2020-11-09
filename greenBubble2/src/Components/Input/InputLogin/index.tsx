//로그인 화면에서 비번, 패스워드 입력창
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width: 100%;
    background-color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const InputField = Styled.TextInput`
    width: 95%;
    height: 40px;
    border-color: #87C598;
    border-width: 2px;
    padding-left: 12px;
`;

interface Props {
    placeholder?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    style?: Object; 
    clearMode?: boolean; //사용자가 입력할 때, 전체 삭제 버튼을 표시할지
    onChangeText?: (text: string) => void; //입력창 내용이 변경될 때, 호출되는 콜백함수
 }

 const InputLogin = ({
     placeholder,
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
                placeholderTextColor = "#A8A6A6"
                placeholder={placeholder}
                clearButtonMode={clearMode ? 'while-editing' : 'never'}
                onChangeText={onChangeText}
                />
         </Container>
     );
 };

 export default InputLogin;