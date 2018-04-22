import React, { Component } from 'react';

import calculateResult from './calculateResult';
import calculateCode from './calculateCode';
import Button from '../components/Button';
import Outcome from '../components/OutcomeText';
import Board from '../components/Board';
import MapPropsToSubmitScore from './MapPropsToSubmitScore';

class BoardContainer extends Component {
  fillArray = (array) => {
    if (array != undefined) {
      return [...Array(10)].map((o,i) => array[i]);
    }
    else {
      return [...Array(10)]
    }
  }

  restartGame = (e) => {
    e.preventDefault();
    const { clearBoard, setOutcome, setCode } = this.props;
    clearBoard();
    setOutcome(null);
    setCode();
  }

  render() {
    const { entries, results, outcome } = this.props;
    const data = {Entries: this.fillArray(entries), Results: this.fillArray(results),};

    return (
      <div>
        <Board data={data} />

        {outcome == 'lose' ? 
          <p>You lose! Better luck next time!</p>
          : ''
        }

        {outcome == 'win' ?
          <p>You win! Your score is x. Would you like to submit your score to the hall of fame?</p>
          : ''
        }

        <Button handleSubmit={this.restartGame} value='Play again'/>

        <MapPropsToSubmitScore />

      </div>
    )
  }
}

export default BoardContainer;