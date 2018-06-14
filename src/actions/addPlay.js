import calculateResult from "../containers/calculateResult";
import { setStartTime, calculateScore } from "./calculateScore";
import { setBoard, setOutcome } from "./index";

export const addPlay = entry => (dispatch, getState) => {
  const { code, plays } = getState();
  const result = calculateResult(entry, code);

  dispatch(setBoard(entry, result));

  if (Object.keys(plays).length == 0) {
    dispatch(setStartTime());
  }

  if (result.join("") == [...Array(4)].map(() => "black").join("")) {
    dispatch(calculateScore());
    dispatch(setOutcome("win"));
  } else if (plays != undefined && plays.length == 9) {
    dispatch(setOutcome("lose"));
  }
};
