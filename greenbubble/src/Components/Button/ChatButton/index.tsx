//로그인, Complete 이럴 때 아래의 초록버튼
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  background-color: white;
  margin-top: 20px;
  width: 60px;
  height: 35px;
`;
const Label = Styled.Text`
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

interface Props {
  onPress?: () => void;
}
const ChatButton = ({onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Label>Chat</Label>
    </Container>
  );
};

export default ChatButton;