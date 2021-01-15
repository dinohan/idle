import styled from '@emotion/styled';
import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Navigation from './Navigation';
import PlayList from './PlayList';

function App() {
  return (
    <Container>
      <HashRouter>
        <Navigation />
        <Route path="/" exact component={Home} />
        <PlayList />
      </HashRouter>
    </Container>
  );
}

export default hot(module)(App);

const Container = styled.div`
  background-color: #e1e2e1;
`;
