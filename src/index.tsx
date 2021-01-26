import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import createSagaMiddleware from 'redux-saga';

import reducer from './modules/reducers';
import App from './components/App';
import rootSaga from './modules/sagas';

const sagaMiddleware = createSagaMiddleware();

const Hot = hot(App);
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.getElementById('root'),
);
