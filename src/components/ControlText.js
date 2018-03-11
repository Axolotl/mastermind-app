import React from 'react';

class ControlText extends React.Component {
  render() {
    return (
      <div id='control-text'>
        <h1 id='control-title'>Mastermind</h1>
        <p className='control-text'>
          Built with React. Source <a href='https://github.com/Axolotl/mastermind-app'>here</a>.
        </p>
        <p className='control-text'>
          Play by guessing the hidden pattern of colors. After each guess, you will receive feedback on
          how close you got. Each black circle means you got the correct color in the correct position. 
          Each white circle means you go the correct color but in the wrong position. Good luck. 
        </p>
        <p className='control-text'>
          Play by dragging a color to each empty circle. Colors can be played more than once. Click submit when finished.
        </p>
      </div>
    )
  }
}

export default ControlText;