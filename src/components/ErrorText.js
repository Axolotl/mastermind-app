import React from 'react';

const errorStyle = {
  margin: '0px',
  color: '#cc0000',
  fontSize: '.85em',
}

const ErrorText = ({ children }) => (
  <p style={errorStyle}>{children}</p>
)

export default ErrorText;