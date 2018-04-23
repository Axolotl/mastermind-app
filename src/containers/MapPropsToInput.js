import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import * as actionCreators from '../actions';
import Input from './Input';

function mapStateToProps(state) {
  return {
    outcome: state.outcome,
    current: state.current,
    inputs: state.inputs,
    invalid: state.invalid,
    gameOverError: state.gameOverError,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps, mapDispachToProps)
)(Input);