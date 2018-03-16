import React from 'react';

const outcomeStyle = {
  fontSize: '1.5em',
  margin: '.2em',
};

const OutcomeText = ({ children }) => (
  <p style={outcomeStyle}>{children}</p>
);

export default OutcomeText;