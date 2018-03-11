import React, { Component } from 'react';
import ControlText from './ControlText';
import InputDraggable from './InputDraggable'

class Control extends Component {
  render() {
    return (
      <div id='control-column' className='column'>
        <ControlText />
        <InputDraggable />
      </div>
    )
  }
}

export default Control;