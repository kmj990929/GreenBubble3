import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  padding: 8px 16px;
  margin: 0px 8px;
  background-color: white;
  margin-top: 10px;
`;
const Label = Styled.Text`
  color: black;
  text-align: center;
  font-weight: bold;
`;

interface Props {
  label: string;
  onPress?: () => void;
}
const Button = ({label, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;