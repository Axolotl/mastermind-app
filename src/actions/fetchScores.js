import axios from 'axios';

export const fetchScoresSuccess = (data) => ({
  type: 'FETCH_SCORES_SUCCESS', data
});

export const fetchScoresError = (data) => ({
  type: 'FETCH_SCORES_ERROR', data 
});

export const fetchScores = () => (dispatch) => {
  axios.get(`/api/scores`)
    .then(res => {
      // strip out all information besides the names and scores while maintaining the format:
      // [{name: name1, score: score1}, {name: name2, score: score2}, ...]
      // to do this we build a new list "filtered" by pushing new "combo" objects to it
      let filtered = [];

      res.data.map(unit => {
        let combo = {};

        Object.entries(unit).map(item => {
          if (item[0] == "name" || item[0] == "score") {
            combo = { ...combo, [item[0]]: item[1] }
          }
        })

        filtered.push(combo);
      })

      // sort by high score (or rather low score as the case may be)
      filtered.sort((a,b) => {
        return a.score - b.score;
      })

      // dispatch new filtered object reducer for mapping to component
      dispatch(fetchScoresSuccess(filtered))
    })
    .catch(err => dispatch(fetchScoresError(err)))
}