import axios from 'axios';

export const dispatchScoreSuccess = (data) => {
  return { type: 'DISPATCH_SCORES_SUCCESS', data }
}

export const dispatchScoreError = (data) => {
  return { type: 'DISPATCH_SCORES_ERROR', data }
}

export const dispatchScore = (name, score) => {
  return dispatch => {
    axios.post(`/api/scores`, {
      name: name,
      score: score,
    })
      .then(res => {
        console.log(`attempted axios.post with ${name} and ${score}`);
        dispatch(dispatchScoreSuccess(res))
      })
      .catch(err => dispatch(dispatchScoreError(err)))
  }
}