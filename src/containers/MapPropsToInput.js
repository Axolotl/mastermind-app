import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { compose } from 'redux';

import Input from './Input';

function mapStateToProps(state) {
  return {
    outcome: state.outcome,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps, mapDispachToProps)
)(Input);