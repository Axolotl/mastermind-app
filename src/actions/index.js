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

export const setInfoField = (selection) => {
  return {
    type: 'SET_INFO_FIELD',
    selection
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

        // dispatch new filtered object reducer for mapping to component 
        dispatch(dbScoresResults(filtered))
      })
      .catch(err => dispatch(dbScoresError(err)))
  }
}