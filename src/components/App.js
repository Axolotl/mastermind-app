import React from 'react';
import Control from './Control';
import MapPlayToBoard from '../containers/MapPlayToBoard';

class App extends React.Component {
  render() {
    return (
      <div id='app-container'>
        <Control />
        <MapPlayToBoard />
      </div>
    )
  }
}

export default App;