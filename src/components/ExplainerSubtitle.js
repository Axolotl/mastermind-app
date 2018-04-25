import React from 'react';
import Link from './Link';

const textStyle = {
  margin: '5px 5px 10px 5px',
  textAlign: 'center',
  fontSize: '.9em',
}

const ExplainerSubtitle = () => (
  <p style={textStyle}>
    Built with React. Source <Link href='https://github.com/axolotl/mastermind-app'>here</Link>.
  </p>
)

export default ExplainerSubtitle
