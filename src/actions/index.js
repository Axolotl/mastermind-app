import axios from 'axios';
import calculateCode from '../containers/calculateCode';
import calculateResult from '../containers/calculateResult';

export const setCode = () => {
  return {
    type: 'SET_CODE',
    code: calculateCode(),
  }
}

export const addPlay = entry => {
  return (dispatch, getState) => {
    const { code, plays } = getState();
    const result = calculateResult(entry, code);

    dispatch(setBoard(entry, result));

    if (result.join('') == [...Array(4)].map(() => 'black').join('')) {
      dispatch(setOutcome('win'));
    }
    else if ((plays != undefined) && (plays.length == 9)){
      dispatch(setOutcome('lose'));
    }
  }
};

export const setBoard = (entry, code) => {
  return {
    type: 'ADD_PLAY',
    entry,
    code,
  }
}

export const setOutcome = outcome => {
  return {
    type: 'SET_OUTCOME',
    outcome,
  }
} 

export const clearBoard = () => {
  return {
    type: 'CLEAR_BOARD'
  }
};

export const setCurrent = (current) => {
  return {
    type: 'SET_CURRENT',
    current,
  }
}

export const addInput = (input, index) => {
  return {
    type: 'ADD_INPUT',
    input,
    index,
  }
}

export const clearInputs = () => {
  return {
    type: 'CLEAR_INPUTS'
  }
}

export const setInvalid = (bool) => {
  return {
    type: 'SET_INVALID',
    bool,
  }
}

// here begin action creators for handling the database

export const dbScoresResults = (data) => {
  return { type: 'DB_SCORES_RESULTS', data }
}

export const dbScoresError = (data) => {
  return { type: 'DB_SCORES_ERROR', data }
}

export const dbScoresGet = () => {
  return dispatch => {
    axios.get(`/api/scores`)
      .then(res => {
        // strip out all the information besides the names and scores
        // response is in json format, a list of objects of lists of key/value pairs
        let filtered = [];
        // begin by mapping over response
        res.data.map(unit => {
          let score = {};
          // we want to end up with a new list of objects, each object in the format {name: "name", score: "score"}
          Object.entries(unit).map(item => {
            if (item[0] == "name" || item[0] == "score") {
              //once we the name and the score, add them to our new object
              score = { ...score, [item[0]]: item[1] }
            }
          })
          // now push thta object to our main list/json object. 
          filtered.push(score);
        })

        // dispacth our new object in the form it will get mapped to the component for rendering
        dispatch(dbScoresResults(filtered))
      })
      .catch(err => dispatch(dbScoresError(err)))
  }
}