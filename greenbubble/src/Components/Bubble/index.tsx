//채팅방안에서 친구가 치는 거
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex-direction: row;  
  background-color: white;
  width: 50%;
  height: auto;
  align-items: flex-start; 
  margin-left: 15px;
  margin: 7px 7px;
`;

const BubbleContainer = Styled.View`
    border-radius: 10px;
    padding: 8px 8px;
    background-color: #FFDF8D;
    width: auto;
    height: auto;
`;
const Text = Styled.Text`
  color: black;
  text-align: left;
  font-size: 14px;
`;

const TimeContainer = Styled.View`
    margin-left: 3px;
    margin-top: 20px;
    width: 30%;
`;
const Time = Styled.Text`
    font-size: 12px;
    color: black;
    text-align: left;
`;

interface Props {
  text: string;
  time: string;
  sender: boolean;
}
const FrinedBubble = ({text, time, sender}: Props) => {
  return (
    <Container>
      <BubbleContainer><Text>{text}</Text></BubbleContainer>
      <TimeContainer><Time>{time}</Time></TimeContainer>
    </Container>
  );
};

export default FrinedBubble;