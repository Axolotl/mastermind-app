import { combineReducers } from 'redux';
import calculateResult from '../containers/calculateResult';

const code = (state = [], action) => {
  switch (action.type) {
    case 'SET_CODE':
      return action.code
    default:
      return state
  }
}

const plays = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAY':
      return [
        ...state,
        {
          //id: action.id,
          entry: action.entry,
          result: calculateResult(action.entry, action.code),
        }
      ]
    case 'CLEAR_BOARD':
      return []
    default:
      return state
  }
};


const GameBoard = combineReducers({
  code,
  plays,
});

export default GameBoard;