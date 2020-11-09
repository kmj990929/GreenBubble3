import React, { useContext } from 'react';
import Styled from 'styled-components/native';

import {StackNavigationProp} from '@react-navigation/stack';

import GreenRoom from '~/Screens/ChatRoomList/GreenRoom';
import YellowRoom from '~/Screens/ChatRoomList/YellowRoom';
const Container = Styled.View`
  flex: 1;
  margin-top: 40px;
  align-items: center;
  background-color: white;
`;

const Label = Styled.Text`
    color: black;
    fontWeight: bold;
    text-align: left;
    font-size: 24px;
    margin-top: 40px;
`;

const SmallLabel = Styled.Text`
    font-size: 16px;
    fontWeight: bold;
`;

const Footer = Styled.View`
    width: 100%;
    margin-top: 270px;
    align-items: center;
`;

type NavigationProp = StackNavigationProp<ChatParamList, 'ChatRoomList'>;
interface Props {
  navigation: NavigationProp;
  onPress: () => void;
}



const ChatRoomList = ({navigation, onPress}: Props, ) => {
 // const {chatRoom, setChatRoom} = useContext<IChatRoom>();
  return (
     
    <Container>
            <GreenRoom name="효정" lastMessage="hi~~~~~" onPress={() => { navigation.navigate('InsideRoom');}}/>
            <YellowRoom name="효정" lastMessage="hi~~~~~" onPress={() => { navigation.navigate('InsideRoom');}}/>
            <GreenRoom name="김지호" lastMessage="hi~~~~~" onPress={() => { navigation.navigate('InsideRoom');}}/>
            <YellowRoom name="최아린" lastMessage="hi~~~~~" onPress={() => { navigation.navigate('InsideRoom');}}/>
            <GreenRoom name="효정" lastMessage="hi~~~~~" onPress={() => { navigation.navigate('InsideRoom');}}/>
            <YellowRoom name="효정" lastMessage="hi~~~~~" onPress={() => { navigation.navigate('InsideRoom');}}/>
            <GreenRoom name="효정" lastMessage="hi~~~~~" onPress={() => { navigation.navigate('InsideRoom');}}/>
            <YellowRoom name="효정" lastMessage="hi~~~~~" onPress={() => { navigation.navigate('InsideRoom');}}/>
            <GreenRoom name="김지호" lastMessage="hi~~~~~" onPress={() => { navigation.navigate('InsideRoom');}}/>
            
    </Container>
    
  );
};

export default ChatRoomList;