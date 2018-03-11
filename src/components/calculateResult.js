import React from 'react';

const calculateResult = (play, code) => {
  let result = [];

  //copy play and code to new arrays to protect against store contamination
  play = Array.from(play);
  code = Array.from(code);

  console.log('play ' + play);
  console.log('code ' + code);

  //first pass check for items that match value and index
  //then change those values so they are not found again on the second pass
  //values to ignore in play changed to 7, in code changed to 8
  for (let i=0; i<4; i++) {
    if (play[i] == code[i]) {
      result.push('black');
      play.splice(i, 1, '7');
      code.splice(i, 1, '8');
    }
  }

  //second pass check for items that match value but differ index
  //then change their values so one value in play doesn't ping multiple values in code
  for (let i=0; i<4; i++) {
    let foundAt = code.indexOf(play[i]);
    if (foundAt >= 0) {
      result.push('white');
      play.splice(i, 1, '7');
      code.splice(foundAt, 1, '8');
    }
  }

  return result
}

export default calculateResult;