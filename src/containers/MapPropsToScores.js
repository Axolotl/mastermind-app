import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import ScoresContainer from "./ScoresContainer";

function mapStateToProps(state) {
  return {
    scores: state.scores
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MapPropsToScores = connect(
  mapStateToProps,
  mapDispachToProps
)(ScoresContainer);

export default MapPropsToScores;
