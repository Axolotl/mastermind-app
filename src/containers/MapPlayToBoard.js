import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import BoardContainer from './BoardContainer';

function mapStateToProps(state) {
  return {
    plays: state.plays,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MapPlayToBoard = connect(mapStateToProps, mapDispachToProps)(BoardContainer);


export default MapPlayToBoard;