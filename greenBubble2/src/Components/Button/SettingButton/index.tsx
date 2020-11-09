//로그인, Complete 이럴 때 아래의 초록버튼
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  border-radius: 5px;
  background-color: #C4C4C4;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  align-items: center;
  padding: 15px;
`;
const Label = Styled.Text`
  color: black;
  text-align: center;
  font-size: 16px;
`;

interface Props {
  label: string;
  onPress?: () => void;
}
const SettingButton = ({label, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};

export default SettingButton;