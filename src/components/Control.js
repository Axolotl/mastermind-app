import React from 'react';
import ControlText from './ControlText';
import Input from './Input';

class Control extends React.Component {
  render() {
    return (
      <div id='control-column' className='column'>
        <ControlText />
        <Input />
      </div>
    )
  }
}

export default Control;