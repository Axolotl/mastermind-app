import calculateCode from '../containers/calculateCode';
import calculateResult from '../containers/calculateResult';

export * from './fetchScores';
export * from './dispatchScore';
export * from './calculateScore';

import { setStartTime, setNewScore, calculateScore } from './calculateScore';

export const setCode = () => {
  return {
    type: 'SET_CODE',
    code: calculateCode(),
  }
}

export const addPlay = entry => {
  return (dispatch, getState) => {
    const { code, plays } = getState();
    const result = calculateResult(entry, code);

    dispatch(setBoard(entry, result));

    if (Object.keys(plays).length == 0) {
      dispatch(setStartTime());
    }

    if (result.join('') == [...Array(4)].map(() => 'black').join('')) {
      dispatch(calculateScore());
      dispatch(setOutcome('win'));
    }
    else if ((plays != undefined) && (plays.length == 9)){
      dispatch(setOutcome('lose'));
    }
  }
};

export const setBoard = (entry, code) => {
  return {
    type: 'ADD_PLAY',
    entry,
    code,
  }
}

export const setOutcome = outcome => {
  return {
    type: 'SET_OUTCOME',
    outcome,
  }
} 

export const clearBoard = () => {
  return {
    type: 'CLEAR_BOARD'
  }
};

export const setCurrent = (current) => {
  return {
    type: 'SET_CURRENT',
    current,
  }
}

export const addInput = (input, index) => {
  return {
    type: 'ADD_INPUT',
    input,
    index,
  }
}

export const clearInputs = () => {
  return {
    type: 'CLEAR_INPUTS'
  }
}

export const setInvalid = (bool) => {
  return {
    type: 'SET_INVALID',
    bool,
  }
}

export const setInfoField = (selection) => {
  return {
    type: 'SET_INFO_FIELD',
    selection
  }
}