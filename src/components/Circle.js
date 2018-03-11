import React from 'react';

const circleStyle = {
  borderRadius: '50%',
  border: '2px solid black',
  margin: '5px',
}

const Circle = ({ color = 'white', size = '30px' }) => (
  <div 
    style={Object.assign({}, {
      background: color,
      height: size,
      width: size,
    }, circleStyle)} 
  />
)

export default Circle