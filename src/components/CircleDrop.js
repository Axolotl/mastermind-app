import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import Circle from './Circle';
import ItemTypes from './ItemTypes'

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
      <div>
        <Circle color={color} />
      </div>
    )
  }
}

export default DropTarget(ItemTypes.ITEM, itemTarget, collect)(CircleDrop)