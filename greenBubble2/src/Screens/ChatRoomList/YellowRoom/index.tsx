//채팅방목록 초록방

import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  padding: 8px 13px;
  margin-bottom: 2px;
  margin-top: 2px;
  background-color: #FED365;
  width: 95%;
  height: 60px;
  border-radius: 10px;
  flex-direction: row;
`;
const Message = Styled.Text`
  color: black;
  text-align: center;
  font-size: 16px;
`;

const MessageContainer = Styled.View`
    margin-top: 10px;
    margin-bottom: 15px;
    margin-left: 20px; 
   
`;


const ImageContainer = Styled.View`
    border-radius: 5px;
    background-color: white;
    padding: 3px;
    width: 50px;
    height: 35px;
`;
const Image = Styled.Image``;

const NameContainer = Styled.View`
  width: 100%;
  height: 15%;
  padding-left: 5px;
  align-items: center;   
`;

const Name = Styled.Text`
  color: black;
  text-align: left;
  font-size: 14px;
`;

const ProfileContainer = Styled.View`
    margin-top: -3px;
    flex-direction: column;
`;
/*
interface Props {
  name: string;
  uri: string;
  lastMessage: string;
  onPress?: () => void;
}


const GreenRoom = ({name, uri, lastMessage, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <ProfileContainer>
          <ImageContainer><Image source={{uri}}/></ImageContainer>
          <Name userName={name}/>
      </ProfileContainer>
      <MessageContainer><Message>{lastMessage}</Message></MessageContainer>
    </Container>
  );
};
*/

interface Props {
    name: string;
    //uri: string;
    lastMessage: string;
    onPress?: () => void;
  }
  
  
  const YellowRoom = ({name, lastMessage, onPress}: Props) => {
    return (
      <Container onPress={onPress}>
        <ProfileContainer>
            <ImageContainer><Image source={require('~/Assets/Images/gallery.png')}  
                                    style={{height:'100%',width:'100%'}} />
            </ImageContainer>
            <NameContainer><Name>{name}</Name></NameContainer>
        </ProfileContainer>
        <MessageContainer><Message>{lastMessage}</Message></MessageContainer>
      </Container>
    );
  };


export default YellowRoom;