import React from 'react';

class ControlText extends React.Component {
  render() {
    return (
      <div id='control-text'>
        <h1 id='control-title'>Mastermind</h1>
        <p className='control-text'>
          <b>Objective:</b> to guess the 4 number code 
          randomly chosen by the computer. You 
          have ten guesses. After each guess you
          will receive feedback hinting whether 
          or not you are going in the right direction.
        </p>
        {/*<p className='control-text'>
          Each digit will be a number from 1-6.
        </p>
        <p className='control-text'>
          Feedback will be presented as 4 numbers,
          each a 2, 1, or 0.
        </p>
        <p className='control-text'>
          A 2 means an entered number is both correct
          and in the correct location.
        </p>
        <p className='control-text'>
          A 1 means an entered number is correct, but
          not in the correct location.
        </p>
        <p className='control-text'>
          A 0 means an entered number is not correct.
        </p>
        <p className='control-text'>
          For example, if you entered the number 3321
          and the secret code was 3244, the feedback
          would be returned as 2100.
        </p>
        <p className='control-text'>
          Enter your guess below.
        </p>*/}
      </div>
    )
  }
}

export default ControlText;