import React, { Component } from 'react';

import Scores from '../components/Scores';

class ScoresContainer extends Component {
  componentDidMount() {
    // pull in scores from the database
    this.props.dbScoresGet();
  }
  render () {
    // pass data to presentational component

    return (
      <Scores data={this.props.scores} />
    )
  }
}

export default ScoresContainer