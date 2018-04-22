export const setStartTime = () => {
  return { type: 'SET_START_TIME', data: new Date()}
}

export const setNewScore = (score) => {
  return { type: 'SET_NEW_SCORE', data: score }
}

export const calculateScore = () => {
  return (dispatch, getState) => {
    const { startTime } = getState();
    const newScore = Math.floor(((new Date()) - startTime)/1000);

    dispatch(setNewScore(newScore));
  }
}