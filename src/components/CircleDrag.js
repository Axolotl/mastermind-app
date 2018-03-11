import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import Circle from './Circle';
import ItemTypes from './ItemTypes'

const itemSource = {
  beginDrag(props) {
    props.setCurrentDrag(props.color)
    return {}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

class CircleDrag extends Component {
  render() {
    const { isDragging, connectDragSource, src, color = 'white' } = this.props;
    return connectDragSource(
      <div>
        <Circle color={color} />
      </div>
    )
  }
}

export default DragSource(ItemTypes.ITEM, itemSource, collect)(CircleDrag)