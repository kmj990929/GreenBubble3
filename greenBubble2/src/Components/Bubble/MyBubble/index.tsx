//채팅방안에서 내가 치는 거
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex-direction: row;  
  background-color: white;
  width: 50%;
  height: auto;
  align-items: flex-end;
  margin: 7px 7px;
  margin-left: 260px;
`;

const BubbleContainer = Styled.View`
    border-radius: 10px;
    padding: 8px 8px;
    background-color: #A1D3AF;
    width: auto;
    height: auto;
`;
const Text = Styled.Text`
  color: black;
  text-align: left;
  font-size: 14px;
`;

const TimeContainer = Styled.View`
    width: 30%;
    margin-right: -15px;
`;
const Time = Styled.Text`
    font-size: 12px;
    color: black;
    text-align: left;
`;

interface Props {
  text: string;
  time: string;
}
const MyBubble = ({text, time}: Props) => {
  return (
    <Container>
      <TimeContainer><Time>{time}</Time></TimeContainer>
      <BubbleContainer><Text>{text}</Text></BubbleContainer>
    </Container>
  );
};

export default MyBubble;