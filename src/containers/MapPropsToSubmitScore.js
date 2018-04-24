import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import SubmitScore from './SubmitScore';

function mapStateToProps(state) {
  return {
    infoField: state.infoField,
    score: state.newScore,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MapPropsToSubmitScore = connect(mapStateToProps, mapDispachToProps)(SubmitScore);


export default MapPropsToSubmitScore;