import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import SubmitScore from './SubmitScore';

// what props are gonna need to get passed down here?
// 1. the calculated score
// 2. ...?

function mapStateToProps(state) {
  return {
    infoField: state.infoField,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MapPropsToSubmitScore = connect(mapStateToProps, mapDispachToProps)(SubmitScore);


export default MapPropsToSubmitScore;