import React, { Component } from 'react';

import calculateResult from './calculateResult';
import calculateCode from './calculateCode';

import Button from '../components/Button';
import Outcome from '../components/OutcomeText';

import Board from '../components/Board';

const winningPlay = [...Array(4)].map(()=>'black').join('');

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [...Array(10)],
      results: [...Array(10)],
      code: calculateCode(),
      win: false,
      lose: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.plays != nextProps.plays) {
      //first check if board has been reset by checking if plays array is empty
      //if so reset entries and results
      if (nextProps.plays.length == 0) {
        this.setState({
          entries: [...Array(10)],
          results: [...Array(10)],
        })
      }

      //then check if game has been won or lost yet. if not, continue
      //iterate over plays object + check if each entry has been entered into local state
      //if not, calculate result
      //then check if conditions for win or loss are true

      else if (this.state.win == false) {
        const { entries, results, code } = this.state; 
        nextProps.plays.map(play => {
          //console.log(play.num);
          const { num, id } = play; 
          if (num != entries[id]) {
            //calculate result for play
            //splice new entry and result into temp objects
            //call setstate with updated arrays
            const result = calculateResult(num, code);
            entries.splice(id, 1, num);
            results.splice(id, 1, result);

            //trigger win code
            if (result.join('') == winningPlay) {
              this.setState({win: true})
            }
            //trigger lose code
            else if (results[9] != null) {
              this.setState({lose: true})
            }

            this.setState({
              entries: entries,
              results: results,
            })

          }
        })
      }

    }
  }
  restartGame = (e) => {
    e.preventDefault();
    this.setState({
      code: calculateCode(),
      win: false,
      lose: false,
    })
    this.props.clearBoard();
  }
  render() {
    const { entries, results, win, lose } = this.state;
    const data = {Entries: entries, Results: results,};

    return (
      <div>
        <Board data={data} />
        
        {win == true ? <Outcome>You win!</Outcome> : null}
        {lose == true ? <Outcome>You lose!</Outcome> : null}      

        <Button handleSubmit={this.restartGame} value='Play again'/>
      </div>
    )
  }
}

export default BoardContainer;