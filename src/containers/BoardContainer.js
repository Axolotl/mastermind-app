import React, { Component } from 'react';

import calculateResult from './calculateResult';
import calculateCode from './calculateCode';
import Button from '../components/Button';
import Outcome from '../components/OutcomeText';
import Board from '../components/Board';

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.setCode(),
      entries: [...Array(10)],
      results: [...Array(10)],
      outcome: null,
    };
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.plays != nextProps.plays) {
    let entries = nextProps.plays.map(play => play.entry);
    //let results = entries.map(entry => calculateResult(entry, this.state.code));
    let results = nextProps.plays.map(play => play.result);
    const cutoff = results.map(result => result.join('')).indexOf([...Array(4)].map(() => 'black').join(''));
    this.setState({outcome: null});

    if (cutoff >= 0) {
      entries = [...Array(cutoff+1)].map((o,i) => entries[i]);
      results = [...Array(cutoff+1)].map((o,i) => results[i]);
      this.setState({outcome: 'win'});
    }

    else if (entries.length >= 10) {
      this.setState({outcome: 'lose'});
    }

    entries = [...Array(10)].map((o,i) => entries[i]);
    results = [...Array(10)].map((o,i) => results[i]);

    this.setState({
      entries: entries,
      results: results,
    })

    }
  }

  restartGame = (e) => {
    e.preventDefault();
    this.props.setCode();
    this.setState({
      code: calculateCode(),
      outcome: null,
    })
    this.props.clearBoard();
  }

  render() {
    const { entries, results, outcome } = this.state;
    const data = {Entries: entries, Results: results,};

    return (
      <div>
        <Board data={data} />

        {outcome && 
          <Outcome>You {this.state.outcome}!</Outcome>}

        <Button handleSubmit={this.restartGame} value='Play again'/>
      </div>
    )
  }
}

export default BoardContainer;