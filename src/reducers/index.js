import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import calculateCode from "../containers/calculateCode";

const code = (state = calculateCode(), action) => {
  switch (action.type) {
    case "SET_CODE":
      return action.code;
    default:
      return state;
  }
};

const plays = (state = [], action) => {
  switch (action.type) {
    case "ADD_PLAY":
      return [
        ...state,
        {
          entry: action.entry,
          result: action.code
        }
      ];
    case "CLEAR_BOARD":
      return [];
    default:
      return state;
  }
};

const outcome = (state = null, action) => {
  switch (action.type) {
    case "SET_OUTCOME":
      return action.outcome;
    default:
      return state;
  }
};

const current = (state = "", action) => {
  switch (action.type) {
    case "SET_CURRENT":
      return action.current;
    default:
      return state;
  }
};

const inputs = (state = [...Array(4)], action) => {
  switch (action.type) {
    case "ADD_INPUT":
      return state
        .slice(0, action.index)
        .concat(action.input)
        .concat(state.slice(action.index + 1));
    case "CLEAR_INPUTS":
      return [...Array(4)];
    default:
      return state;
  }
};

const invalid = (state = false, action) => {
  switch (action.type) {
    case "SET_INVALID":
      return action.bool;
    default:
      return state;
  }
};

const gameOverError = (state = false, action) => {
  switch (action.type) {
    case "SET_GAME_OVER_ERROR":
      return action.bool;
    default:
      return state;
  }
};

const infoField = (state = "explainer", action) => {
  switch (action.type) {
    case "SET_INFO_FIELD":
      return action.selection;
    default:
      return state;
  }
};

const scores = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SCORES_SUCCESS":
      return action.data;
    case "FETCH_SCORES_ERROR":
      return "Fetch Scores Failed!";
    default:
      return state;
  }
};

const startTime = (state = "", action) => {
  switch (action.type) {
    case "SET_START_TIME":
      return action.data;
    default:
      return state;
  }
};

const newScore = (state = "", action) => {
  switch (action.type) {
    case "SET_NEW_SCORE":
      return action.data;
    default:
      return state;
  }
};

const GameBoard = combineReducers({
  code,
  plays,
  outcome,
  current,
  inputs,
  invalid,
  scores,
  infoField,
  startTime,
  newScore,
  gameOverError,
  form: formReducer
});

export default GameBoard;
