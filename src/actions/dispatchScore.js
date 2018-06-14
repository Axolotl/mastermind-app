import axios from "axios";
import {
  fetchScores,
  fetchScoresSuccess,
  fetchScoresError
} from "./fetchScores";

export const dispatchScoreSuccess = data => ({
  type: "DISPATCH_SCORES_SUCCESS",
  data
});

export const dispatchScoreError = data => ({
  type: "DISPATCH_SCORES_ERROR",
  data
});

export const dispatchScore = (name, score) => dispatch => {
  axios
    .post(`/api/scores`, {
      name: name,
      score: score
    })
    .then(res => {
      dispatch(dispatchScoreSuccess(res));
      dispatch(fetchScores());
    })
    .catch(err => {
      dispatch(dispatchScoreError(err));
      dispatch(fetchScores());
    });
};
