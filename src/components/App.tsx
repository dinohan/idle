import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Navigation from './Navigation';
import PlayList from './PlayList';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact component={Home} />
      <PlayList />
    </HashRouter>
  );
}

export default hot(module)(App);
