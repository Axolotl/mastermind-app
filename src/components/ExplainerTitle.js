import React from 'react';

const titleStyle = {
  fontFamily: "'Cormorant', serif",
  fontWeight: '500',
  margin: '0px',
  fontSize: '2.6em',
}

const ExplainerTitle = ({ children }) => (
  <h1 style={titleStyle}>{children}</h1>
)

export default ExplainerTitle;