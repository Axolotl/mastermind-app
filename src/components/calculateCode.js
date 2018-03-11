//import React from 'react';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple', 
]

const calculateCode = () => {
  let code = [];
  let randoms = [...Array(4)].map(() => Math.floor((Math.random() * 6) + 1));

  for (let i=0; i<4; i++) {
    code.push(colors[randoms[i]-1]);
  };

  return code;
}

export default calculateCode;