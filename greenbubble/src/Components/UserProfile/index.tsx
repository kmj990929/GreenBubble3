//프로필 틀

import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  padding: 3px 13px;
  margin-bottom: 5px;
  margin-top: 5px;
  background-color: white;
  width: 80%;
  height: 50px;
  flex-direction: row;
`;

const ImageContainer = Styled.View`
    border-radius: 5px;
    background-color: #A7DAB5;
    padding: 3px;
    width: 50px;
    height: 45px;
`;
const Image = Styled.Image``;

const NameContainer = Styled.View`
  width: 100%;
  height: 25px;
  padding-left: 10px;
  padding-top: 5px; 
  margin-top: 5px; 
`;

const Name = Styled.Text`
  color: black;
  text-align: left;
  font-size: 16px;
`;

const ProfileContainer = Styled.View`
    margin-top: 3px;
    flex-direction: row;
`;

interface Props {
    name: string;
    //uri: string;
    //image: string;
  }
  
  
  const UserProfile = ({name}: Props) => {
    return (
      <Container>
        <ProfileContainer>
            <ImageContainer>
                <Image source={require('~/Assets/Images/gallery.png')} style={{height:'100%',width:'100%'}} />
            </ImageContainer>
            <NameContainer><Name>{name}</Name></NameContainer>
        </ProfileContainer>
      </Container>
    );
  };


export default UserProfile;