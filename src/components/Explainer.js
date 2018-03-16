import React, { Component } from 'react';

import Text from './ExplainerText';
import Title from './ExplainerTitle';
import Link from './Link';

class ControlText extends Component {
  render() {
    return (
      <div>
        <Title>Mastermind</Title>
        <Text>
          Built with React. Source <Link href='https://github.com/Axolotl/mastermind-app'>here</Link>.
        </Text>
        <Text>
          Play by guessing the hidden pattern of colors. After each guess, you will receive feedback on
          how close you got. Each black circle means you got the correct color in the correct position. 
          Each white circle means you go the correct color but in the wrong position. Good luck. 
        </Text>
        <Text>
          Play by dragging a color to each empty circle. Colors can be played more than once. Click submit when finished.
        </Text>
      </div>
    )
  }
}

export default ControlText;