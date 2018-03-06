import React from 'react';
import calculateResult from './calculateResult';
import calculateCode from './calculateCode';

//import { clearBoard } from '../actions';

class Game extends React.Component {
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
      //first check if the plays object is empty, if so reset component state
      console.log('we got as far as nextprops being different')
      console.log(nextProps)
      if (nextProps.plays.length == 0) {
        console.log('we are in the first if statement')
        this.setState({
          entries: [...Array(10)],
          results: [...Array(10)],
        })
      }

      //check if plays object has changed
      //iterate over plays object + check if each entry has been entered into local state
      //if not, calculate result
      //then check for win or loss 
      //if so, block new entries and display retry button

      else if (this.state.win == false) {
        console.log('eles if statement called');
        const { entries, results, code } = this.state; 
        nextProps.plays.map(play => {
          console.log('we are in the map function now')
          const { num, id } = play; 
          if (num != entries[id]) {
            //calculate result for play
            //splice new entry and result into temp objects
            //call setstate with updated arrays
            const result = calculateResult(num, code);
            entries.splice(id, 1, num);
            results.splice(id, 1, result);

            //trigger win code
            if (result == '2222') {
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
      win: false,
      lose: false,
    })
    this.props.clearBoard();
  }
  render() {
    return (
      <div id='game-column' className='column'>
        <h2 id='game-title'>Can you guess the secret code?</h2>
        <div id='game-table'>

          <div className='table-column'>
            <p className='table-column-title'>
              Entries
            </p>
            <table>
              <tbody>
                {Object.keys(this.state.entries).map((key) => {
                  return (
                    <tr key={key}>
                      <td>{this.state.entries[key]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className='table-column'>
            <p className='table-column-title'>
              Results
            </p>
            <table>
              <tbody>
                {Object.keys(this.state.results).map((key) => {
                  return (
                    <tr key={key}>
                      <td>{this.state.results[key]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div id='game-ending'>
          {this.state.win == true ? <p className='win_or_lose'>You win!</p> : null}
          {this.state.lose == true ? <p className='win_or_lose'>You lose!</p> : null}
        </div>

        <button onClick={this.restartGame}>Play again</button>
      </div>
    )
  }
}

export default Game;