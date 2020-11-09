import React from 'react';
import Styled from 'styled-components/native';


const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #87C598;
`;
const OuterContainer = Styled.View`
    flex: 2;
    width: 100%;
    padding: 13px;
    background-color: #87C598; 
    border-radius: 30px;
    margin-bottom: -10px;
`;

const InnerContainer = Styled.View`
    width: 100%;
    margin-top: 20px;
    padding:25px;
    background-color: #FFFFFF; 
    border-radius: 30px;
    height: 90%;
`;

const Label = Styled.Text`
    color: black;
    fontWeight: bold;
    text-align: left;
    font-size: 24px;
    margin-top: 40px;
`;


const DevInfo = () => {
  return (
     
    <Container>
        <OuterContainer>

            <Label>About Devs!</Label>
              <InnerContainer>
        
            </InnerContainer>
      
      </OuterContainer>
    </Container>
    
  );
};

export default DevInfo;