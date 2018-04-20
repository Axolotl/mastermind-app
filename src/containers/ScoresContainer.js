import React, { Component } from 'react';

import Scores from '../components/Scores';

class ScoresContainer extends Component {
  componentDidMount() {
    // pull in scores from the database
    this.props.dbScoresGet();
  }
  render () {
    // pass data to presentational component
    const { scores } = this.props;

    return (
      <Scores data={scores} />
    )
  }
}

export default ScoresContainer