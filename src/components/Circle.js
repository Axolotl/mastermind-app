import React from 'react';

const circleStyle = {
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  border: '2px solid black',
  margin: '5px',
}

const Circle = ({ color = 'white' }) => (
  <div style={Object.assign({}, {background: color}, circleStyle)}></div>
)

export default Circle