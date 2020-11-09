//로그인, Complete 이럴 때 아래의 초록버튼
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  background-color: white;
  margin-top: 20px;
  margin-left: 10px;
  width: 100%;
  height: 40px;
  flex-direction: row;
`;
const Label = Styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;
const Image = Styled.Image``;
const ImageC1 = Styled.View`
    border-radius: 100px;
    background-color: #C9C7C7;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 30px;
    margin-right: 10px;    
`;
const ImageC2 = Styled.View`
    border-radius: 100px;
    background-color: #C9C7C7;
    justify-content: center;
    align-items: center; 
    width: 17px;
    height: 27px;
`;


interface Props {
  onPress?: () => void;
}
const AddFriend = ({onPress}: Props) => {
  return (
    <Container onPress={onPress}>
       
      <ImageC1>
          <ImageC2><Image source={require('~/Assets/Images/addFriend.png')}/></ImageC2>
      </ImageC1>  
      <Label>친구 추가</Label>
      
    </Container>
  );
};

export default AddFriend;