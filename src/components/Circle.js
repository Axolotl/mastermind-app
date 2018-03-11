import React from 'react';

const circleStyle = {
  borderRadius: '50%',
  border: '2px solid black',
}

const Circle = ({ color = 'white', size = '30px', margin = '5px' }) => (
  <div 
    style={Object.assign({}, {
      background: color,
      height: size,
      width: size,
      margin: margin,
    }, circleStyle)} 
  />
)

export default Circle