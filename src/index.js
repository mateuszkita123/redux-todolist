import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import { rootSaga } from './rootSaga';
import App from './components/App'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  { isLoading: false, isError: false, todos: [] },
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);