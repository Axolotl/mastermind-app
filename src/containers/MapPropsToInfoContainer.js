import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import InfoContainer from "./InfoContainer";

function mapStateToProps(state) {
  return {
    infoField: state.infoField
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MapPropsToInfoContainer = connect(
  mapStateToProps,
  mapDispachToProps
)(InfoContainer);

export default MapPropsToInfoContainer;
