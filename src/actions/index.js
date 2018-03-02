let nextPlay = 0;

export const addPlay = num => {
  return {
    type: 'ADD_PLAY',
    id: nextPlay++,
    num,
  }
};

export const clearBoard = () => {
  nextPlay = 0;
  return {
    type: 'CLEAR_BOARD'
  }
};