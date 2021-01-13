import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Navigation from './Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route />
      <Route />
    </HashRouter>
  );
}

export default hot(module)(App);
