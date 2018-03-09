import React, { Component } from 'react';
import InputSource from './InputSource';
import InputReceive from './InputReceive';
import InputSubmit from './InputSubmit';

class InputDraggable extends Component {
  render() {
    return (
      <div>
        <InputSource />
        <InputReceive />
        <InputSubmit />
      </div>
    )
  }
}

export default InputDraggable;