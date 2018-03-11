import React from 'react';

import InputButton from './InputButton';
import calculateResult from './calculateResult';
import calculateCode from './calculateCode';
import Circle from './Circle';

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

const winningPlay = [...Array(4)].map(()=>'black').join('');

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
                        <div style={wrapperStyle}>
                          {entries[key] &&
                            entries[key].map((color, index) => {
                              return (
                                <Circle key={index} color={color} size='10px' />
                              )
                            })
                          }
                        </div>
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
                        <div style={wrapperStyle}>
                          {results[key] &&
                            results[key].map((color, index) => {
                              return (
                                <Circle key={index} color={color} size='10px' />
                              )
                            })
                          }
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div id='game-ending'>
          {win == true ? <p className='win_or_lose'>You win!</p> : null}
          {lose == true ? <p className='win_or_lose'>You lose!</p> : null}
        </div>

        <InputButton handleSubmit={this.restartGame} value='Play again'/>
      </div>
    )
  }
}

export default Game;