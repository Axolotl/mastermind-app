import React from 'react';

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const CircleWrapper = ({ children }) => (
  <div style={wrapperStyle}>{children}</div>
)

export default CircleWrapper