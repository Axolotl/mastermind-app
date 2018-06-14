import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import BoardContainer from "./BoardContainer";

function mapStateToProps(state) {
  return {
    entries: state.plays.map(play => play.entry),
    results: state.plays.map(play => play.result),
    outcome: state.outcome
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MapPropsToBoard = connect(
  mapStateToProps,
  mapDispachToProps
)(BoardContainer);

export default MapPropsToBoard;
