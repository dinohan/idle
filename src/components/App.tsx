/* eslint-disable react/jsx-props-no-spreading */
import styled from '@emotion/styled';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Navigation from './Navigation';
import PlayList from './PlayList';
import Background from './Background';

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
        <BrowserRouter>
          <Background />
          <Navigation />
          <Route exact path="/" component={Home} />
          <Switch>
            <Route path="/detail/:album" component={Detail} />
            <Route path="/detail" component={Detail} />
          </Switch>
          <PlayList />
        </BrowserRouter>
      </Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  color: #eee;
  width: 100%;
  min-height: 100vh;
`;
