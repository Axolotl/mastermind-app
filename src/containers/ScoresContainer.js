import React, { Component } from "react";

import Scores from "../components/Scores";
import Text from "../components/ExplainerText";

class ScoresContainer extends Component {
  componentDidMount() {
    // pull in scores from the database
    this.props.fetchScores();
  }
  render() {
    // pass data to presentational component
    const { scores } = this.props;
    console.log(scores);

    return (
      <div>
        {Object.keys(scores).length == 0 ? (
          <p>Fetching scores from database</p>
        ) : (
          <div>
            <Text>
              Scores are measured in seconds to completion. Lower is better.
            </Text>
            <Scores data={scores} />
          </div>
        )}
      </div>
    );
  }
}

export default ScoresContainer;
