import 'react-native-gesture-handler';
import React from 'react';
import Styled from 'styled-components/native';
import Navigator from './Screens/Navigator';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <Container>
      <Navigator/>
    </Container>

    
  );
};
export default App;
