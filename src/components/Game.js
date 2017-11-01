import React from 'react';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      results: [],
    };
  }
  componentDidMount() {
    for (let i=0; i<10; i++) {
      this.state.entries['entry'+i] = '';
      this.state.results['result'+i] = '';
      this.setState({
        entries: this.state.entries,
        results: this.state.results,
      })
    };
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