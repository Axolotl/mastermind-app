import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [...Array(10)],
      results: [...Array(10)],
      secret_code: '6655',
    };
  }
  calculateResult(play, code) {
    let result = [];
    //convert play and code to iterable arrays
    play = Array.from(play);
    code = Array.from(code);

    //first pass check for items that match value and index
    //then change those values so they are not found again on the second pass
    //values to ignore in play changed to 7, in code changed to 8
    for (let i=0; i<4; i++) {
      if (play[i] == code[i]) {
        result.push('2');
        play.splice(i, 1, '7');
        code.splice(i, 1, '8');
      }
    }

    //second pass check for items that match value but differ index
    //then change their values so one value in play doesn't ping multiple values in code
    for (let i=0; i<4; i++) {
      let foundAt = code.indexOf(play[i]);
      if (foundAt >= 0) {
        result.push('1');
        play.splice(i, 1, '7');
        code.splice(foundAt, 1, '8');
      }
    }

    //append 0's until the result is four digits
    if (result.length < 4) {
      for (let i=result.length; i<4; i++) {
        result.push('0');
      }
    }

    return result.join('')
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.plays != nextProps.plays) {
      let play = nextProps.plays.pop();
      if (play.id < 10) {
        let nextEntries = this.state.entries;
        nextEntries.splice(play.id, 1, play.num);

        let nextResults = this.state.results;
        nextResults.splice(play.id, 1, this.calculateResult(play.num, this.state.secret_code));

        this.setState({
          entries: nextEntries,
          results: nextResults,
        })
      }
    }
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
      </div>
    )
  }
}

export default Game;