import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPlay } from '../actions';

const circleStyle = {
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  border: '2px solid black',
  margin: '5px',
}

const Types = {
  ITEM: 'circle'
}

const itemTarget = {
  drop(props) {
    props.changeCircleColor(props.index);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class CircleDrop extends Component {
  render() {
    const { connectDropTarget, color = 'white' } = this.props;
    return connectDropTarget(
      <div style={Object.assign({}, {background: color}, circleStyle)}></div>
    )
  }
}

export default compose(
  DropTarget(Types.ITEM, itemTarget, collect),
  connect()
)(CircleDrop);