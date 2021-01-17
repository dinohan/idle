import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import reducer from './reducers';
import App from './components/App';

const Hot = hot(App);
const store = configureStore({ reducer });

ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.getElementById('root'),
);
