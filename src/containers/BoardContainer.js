import React, { Component } from 'react';

import calculateResult from './calculateResult';
import calculateCode from './calculateCode';
import Button from '../components/Button';
import Outcome from '../components/OutcomeText';
import Board from '../components/Board';

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

        {outcome && 
          <Outcome>You {outcome}!</Outcome>}

        <Button handleSubmit={this.restartGame} value='Play again'/>
      </div>
    )
  }
}

export default BoardContainer;