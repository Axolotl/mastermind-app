import { combineReducers } from 'redux';

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
          entry: action.entry,
          result: action.code,
        }
      ]
    case 'CLEAR_BOARD':
      return []
    default:
      return state
  }
};

const outcome = (state = null, action) => {
  switch (action.type) {
    case 'SET_OUTCOME':
      return action.outcome
    default:
      return state
  }
}

const GameBoard = combineReducers({
  code,
  plays,
  outcome,
});

export default GameBoard;