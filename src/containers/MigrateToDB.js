import React, { Component } from 'react';

import Button from '../components/Button';

// begin mapping component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

function mapStateToProps(state) {
  return {
    scores: state.scores.results,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
//

class innerMigrateToDB extends Component {
  onBottonPress = () => {
    //alert('button pressed');
    this.props.dbScoresGet();
  }
  render () {
    return (
      <div>
        <div><p>{this.props.scores}</p></div>
        <Button handleSubmit={this.onBottonPress} value="Press Button" />
      </div>
    )
  }
}

// mapping inner function because i'm lazy right now
const MigrateToDB = connect(mapStateToProps, mapDispachToProps)(innerMigrateToDB);

export default MigrateToDB