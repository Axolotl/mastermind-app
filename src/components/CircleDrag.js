import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

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
      <div style={Object.assign({}, {background: color}, circleStyle)}></div>
    )
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(CircleDrag)