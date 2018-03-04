import React from 'react';

const calculateCode = () => {
  let secret_code = [];
  for (let i=0; i<4; i++) {
    secret_code.push(Math.floor((Math.random() * 6) + 1));
  };
  return secret_code.join('');
}

export default calculateCode;