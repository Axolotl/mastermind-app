import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import GameBoard from './reducers';
import App from './containers/App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(GameBoard, composeEnhancers(
  applyMiddleware(thunk, createLogger())
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);