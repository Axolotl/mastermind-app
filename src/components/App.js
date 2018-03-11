import React, { Component } from 'react';

import ControlText from './ControlText';
import InputDraggable from './InputDraggable';
import MapPlayToBoard from '../containers/MapPlayToBoard';

class App extends Component {
  render() {
    return (
      <div id='app-container'>

        <div id='control-column' className='column'>
          <ControlText />
          <InputDraggable />
        </div>

        <MapPlayToBoard />

      </div>
    )
  }
}

export default App