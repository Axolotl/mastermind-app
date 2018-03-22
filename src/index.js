import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import GameBoard from './reducers';
import App from './containers/App';
import './index.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(GameBoard, composeEnhancers(
  applyMiddleware(thunk)
));

//let store = createStore(GameBoard, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  // const router = routerMiddleware(browserHistory)
  // const store = create(
  //   rootReducer,
  //   getInitialState(),
  //   compose(
  //     applyMiddleware(thunk.withExtraArgument(api), router),
  //     window.devToolsExtension ? window.devToolsExtension() : f => f
  //   )
  // )

// const store = createStore(GameBoard, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);