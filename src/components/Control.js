import React from 'react';
import ControlText from './ControlText';
import Input from './Input';
import InputDraggable from './InputDraggable'

class Control extends React.Component {
  render() {
    return (
      <div id='control-column' className='column'>
        <ControlText />
        <Input />
        <InputDraggable />
      </div>
    )
  }
}

export default Control;