import React from 'react';
import Control from './Control';
import Game from './Game';

class App extends React.Component {
  render() {
    return (
      <div id='app-container'>
        <Control />
        <Game />
      </div>
    )
  }
}

export default App;