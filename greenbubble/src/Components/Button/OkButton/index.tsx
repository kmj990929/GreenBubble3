//로그인, Complete 이럴 때 아래의 초록버튼
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  border-radius: 3px;
  padding: 8px 8px;
  background-color: #4B955F;
  width: 40%;
  height: 40px;
`;
const Label = Styled.Text`
  color: black;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

interface Props {
  label: string;
  onPress?: () => void;
}
const OkButton = ({label, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};

export default OkButton;