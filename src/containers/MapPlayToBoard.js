import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import Game from '../components/Game';

function mapStateToProps(state) {
  return {
    plays: state.plays,
    test: 'test',
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MapPlayToBoard = connect(mapStateToProps, mapDispachToProps)(Game);


export default MapPlayToBoard;