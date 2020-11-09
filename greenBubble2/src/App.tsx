import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';
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
//<Counter title="This is a Counter App" initValue={5} />