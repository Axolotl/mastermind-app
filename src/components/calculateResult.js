import React from 'react';

const calculateResult = (play, code) => {
  let result = [];
  //convert play and code to iterable arrays
  play = Array.from(play);
  code = Array.from(code);

  //first pass check for items that match value and index
  //then change those values so they are not found again on the second pass
  //values to ignore in play changed to 7, in code changed to 8
  for (let i=0; i<4; i++) {
    if (play[i] == code[i]) {
      result.push('2');
      play.splice(i, 1, '7');
      code.splice(i, 1, '8');
    }
  }

  //second pass check for items that match value but differ index
  //then change their values so one value in play doesn't ping multiple values in code
  for (let i=0; i<4; i++) {
    let foundAt = code.indexOf(play[i]);
    if (foundAt >= 0) {
      result.push('1');
      play.splice(i, 1, '7');
      code.splice(foundAt, 1, '8');
    }
  }

  //append 0's until the result is four digits
    if (result.length < 4) {
      for (let i=result.length; i<4; i++) {
        result.push('0');
      }
    }

  return result.join('')
}

export default calculateResult;