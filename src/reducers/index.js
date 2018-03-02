import { combineReducers } from 'redux';

const play = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAY':
      return [
        ...state,
        {
          id: action.id,
          num: action.num,
        }
      ]
    default:
      return state
  }
};

const board = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_BOARD':
      return []
    default:
      return state
  }
};

const GameBoard = combineReducers({
  play,
  board,
});

export default GameBoard;