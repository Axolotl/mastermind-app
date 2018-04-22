import React, { Component } from 'react';

import Scores from '../components/Scores';

class ScoresContainer extends Component {
  componentDidMount() {
    // pull in scores from the database
    this.props.fetchScores();
  }
  render () {
    // pass data to presentational component
    const { scores } = this.props;
    console.log(scores);

    return (
      <div>
        {Object.keys(scores).length == 0 ? 
          <p>Fetching scores from database</p> : ''
        }
        <Scores data={scores} />
      </div>
    )
  }
}

export default ScoresContainer