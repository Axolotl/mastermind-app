import calculateCode from '../containers/calculateCode';
//let nextPlay = 0;

export const setCode = () => {
  return {
    type: 'SET_CODE',
    code: calculateCode(),
  }
}

export const addPlay = entry => {
  return (dispatch, getState) => {
    const { code } = getState();
    dispatch(setBoard(entry, code));
  }
};

export const setBoard = (entry, code) => {
  return {
    type: 'ADD_PLAY',
    //id: nextPlay++,
    entry,
    code,
  }
}

export const clearBoard = () => {
  //nextPlay = 0;
  return {
    type: 'CLEAR_BOARD'
  }
};

// what do i need to add to shift the game logic to redux? 
// code, entries, results, outcome
// code needs to be called, add play already exists, 
// results and 

