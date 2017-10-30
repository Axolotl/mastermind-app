import React from 'react';
import ControlText from './ControlText';

class Control extends React.Component {
  render() {
    return (
      <div id='control-column' className='column'>
        <ControlText />
      </div>
    )
  }
}

export default Control;