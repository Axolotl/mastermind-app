import React from 'react';

const textStyle = {
  margin: '10px 5px',
  textAlign: 'left',
  fontSize: '.85em',
}

const ExplainerText = ({ children }) => (
  <p style={textStyle}>{children}</p>
)

export default ExplainerText;