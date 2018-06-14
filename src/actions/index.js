import calculateCode from "../containers/calculateCode";

// for ease of navigation and development, all large actions creators (mostly meaning those employing thunk)
// have been moved to their own files. They are exported from index here.

export * from "./fetchScores";
export * from "./dispatchScore";
export * from "./calculateScore";
export * from "./addPlay";

export const setCode = () => ({
  type: "SET_CODE",
  code: calculateCode()
});

export const setBoard = (entry, code) => ({
  type: "ADD_PLAY",
  entry,
  code
});

export const setOutcome = outcome => ({
  type: "SET_OUTCOME",
  outcome
});

export const clearBoard = () => ({
  type: "CLEAR_BOARD"
});

export const setCurrent = current => ({
  type: "SET_CURRENT",
  current
});

export const addInput = (input, index) => ({
  type: "ADD_INPUT",
  input,
  index
});

export const clearInputs = () => ({
  type: "CLEAR_INPUTS"
});

export const setInvalid = bool => ({
  type: "SET_INVALID",
  bool
});

export const setInfoField = selection => ({
  type: "SET_INFO_FIELD",
  selection
});

export const setGameOverError = bool => ({
  type: "SET_GAME_OVER_ERROR",
  bool
});
