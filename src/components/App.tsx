import styled from '@emotion/styled';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Navigation from './Navigation';
import PlayList from './PlayList';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Container>
      <HashRouter>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
        <PlayList />
      </HashRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  width: 100%;
  min-height: 100vh;
`;
