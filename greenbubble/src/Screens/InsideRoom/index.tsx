import React, { useCallback, useEffect, useState } from 'react';
import Styled from 'styled-components/native';

import FriendBubble from '~/Components/Bubble/FriendsBubble';
import MyBubble from '~/Components/Bubble/MyBubble';
import InputChat from '~/Components/Input/InputChat';

const Container = Styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: stretch;
`;

const BubbleContainer = Styled.View`
    width: 100%;
    background-color: white;
    justify-content:center;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
`;

const Footer = Styled.View`
    background-color: white;
    justify-content: center;
    align-items: center;
`;
interface Props{

}
const InsideRoom = () => {
  return (
    <Container>
        <BubbleContainer>
            <FriendBubble text="hello~" time="11:11"/>
            <MyBubble text="bye~" time="11:12"/>
            <FriendBubble text="hello~" time="11:11"/>
            <FriendBubble text="hello~" time="11:11"/>
            <FriendBubble text="hello~" time="11:11"/>
            <MyBubble text="bye~" time="11:12"/>
            <MyBubble text="bye~" time="11:12"/>
            <FriendBubble text="hello~" time="11:11"/>
            <MyBubble text="bye~" time="11:12"/>
        </BubbleContainer>
        <Footer><InputChat/></Footer>
    </Container>
  );
};

export default InsideRoom;