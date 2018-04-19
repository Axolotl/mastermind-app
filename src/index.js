import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import GameBoard from './reducers';
import App from './containers/App';
import './index.css';


// b// This will be our application entry. We'll setup our server here.
// const http = require('http');
// const app = require('../app'); // The express app we just created

// // const port = parseInt(process.env.PORT, 10) || 8000;
// // app.set('port', port);

// // const server = http.createServer(app);
// // server.listen(port);


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