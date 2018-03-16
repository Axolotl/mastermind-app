import React, { Component } from 'react';

import Button from './Button';
import calculateResult from './calculateResult';
import calculateCode from './calculateCode';
import Circle from './Circle';
import Outcome from './OutcomeText';
import Wrapper from './CircleWrapper';

const winningPlay = [...Array(4)].map(()=>'black').join('');

class Board extends Component {
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
    return (
      <div id='game-column' className='column'>
        <div id='game-table'>

          <div className='table-column'>
            <p className='table-column-title'>
              Entries
            </p>
            <table>
              <tbody>
                {Object.keys(entries).map((key) => {
                  return (
                    <tr key={key}>
                      <td>
                        <Wrapper>
                          {entries[key] &&
                            entries[key].map((color, index) => {
                              return (
                                <Circle key={index} color={color} size='10px' margin='0px 5px'/>
                              )
                            })
                          }
                        </Wrapper>
                      </td>
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
                {Object.keys(results).map((key) => {
                  return (
                    <tr key={key}>
                      <td>
                        <Wrapper>
                          {results[key] &&
                            results[key].map((color, index) => {
                              return (
                                <Circle key={index} color={color} size='10px' margin='0px 5px'/>
                              )
                            })
                          }
                        </Wrapper>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div id='game-ending'>
          {win == true ? <Outcome>You win!</Outcome> : null}
          {lose == true ? <Outcome>You lose!</Outcome> : null}
        </div>

        <Button handleSubmit={this.restartGame} value='Play again'/>
      </div>
    )
  }
}

export default Board;