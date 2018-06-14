// calculateScore works by comparing a Date object created at the submit of first play
// with a Date object created at the termination of the game
// in this way total time eclipsed in the game from beginning to end is recorded

export const setStartTime = () => ({
  type: "SET_START_TIME",
  data: new Date()
});

export const setNewScore = score => ({
  type: "SET_NEW_SCORE",
  data: score
});

export const calculateScore = () => (dispatch, getState) => {
  const { startTime } = getState();
  const newScore = Math.floor((new Date() - startTime) / 1000);

  dispatch(setNewScore(newScore));
};
