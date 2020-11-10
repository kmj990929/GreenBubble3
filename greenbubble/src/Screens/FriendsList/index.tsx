//친구목록
import React from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import UserProfile from '~/Components/UserProfile';
import ChatButton from '~/Components/Button/ChatButton';
import AddFriendButton from '~/Components/Button/AddFriendButton';

const Container = Styled.View`
  flex: 1;
  padding: 8px 13px;
  margin-bottom: 2px;
  margin-top: 5px;
  background-color: white;
  width: 100%;
  height: 50px;
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
    margin-top: 3px;
    flex-direction: row;
`;
const Line = Styled.View`
  background-color: #C4C4C4;
  width: 100%;
  height: 2px;
  align-items: center;
  margin-top: 5px;


`;

type NavigationProp = StackNavigationProp<ChatParamList2, 'FriendsList'>;
interface Props {
  navigation: NavigationProp;
  onPress: () => void;
}

  
  const FriendsList = ({navigation, onPress}: Props) => {
    return (
      <Container>
        <ProfileContainer>
            <UserProfile name ="김주현"/>
            <ChatButton onPress={() => { navigation.navigate('InsideRoom');}}/> 
        </ProfileContainer>
        <Line/>
        <AddFriendButton onPress={()=> {navigation.navigate('InsideRoom');}}/>

        <ProfileContainer>
            <UserProfile name ="김주현"/>
            <ChatButton onPress={() => { navigation.navigate('InsideRoom');}}/> 
        </ProfileContainer>

        <ProfileContainer>
            <UserProfile name ="김주현"/>
            <ChatButton onPress={() => { navigation.navigate('InsideRoom');}}/> 
        </ProfileContainer>

        <ProfileContainer>
            <UserProfile name ="김주현"/>
            <ChatButton onPress={() => { navigation.navigate('InsideRoom');}}/> 
        </ProfileContainer>

        <ProfileContainer>
            <UserProfile name ="김주현"/>
            <ChatButton onPress={() => { navigation.navigate('InsideRoom');}}/> 
        </ProfileContainer>

        <ProfileContainer>
            <UserProfile name ="김주현"/>
            <ChatButton onPress={() => { navigation.navigate('InsideRoom');}}/> 
        </ProfileContainer>

      </Container>
    );
  };


export default FriendsList;