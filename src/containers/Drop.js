import React, { Component } from "react";
import { DropTarget } from "react-dnd";

import Circle from "../components/Circle";
import ItemTypes from "./ItemTypes";

const itemTarget = {
  drop(props) {
    props.changeCircleColor(props.index);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Drop extends Component {
  render() {
    const {
      connectDropTarget,
      color = "white",
      changeCircleColor,
      index
    } = this.props;
    return connectDropTarget(
      <div onClick={() => changeCircleColor(index)}>
        <Circle color={color} />
      </div>
    );
  }
}

export default DropTarget(ItemTypes.ITEM, itemTarget, collect)(Drop);
