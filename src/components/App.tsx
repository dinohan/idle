/* eslint-disable react/jsx-props-no-spreading */
import styled from '@emotion/styled';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Navigation from './Navigation';
import PlayList from './PlayList';

const options = {
  timeout: 5000,
  containerStyle: {
    zIndex: 100,
  },
  position: positions.TOP_RIGHT,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <Container>
      <Provider template={AlertTemplate} {...options}>
        <HashRouter>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
          <PlayList />
        </HashRouter>
      </Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  width: 100%;
  min-height: 100vh;
`;
