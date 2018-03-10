import React, { Component } from 'react';
import Circle from './Circle'
import InputButton from './InputButton';
import CircleDrag from './CircleDrag';
import CircleDrop from './CircleDrop';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple', 
]

const inputs = [...Array(4)]

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

class InputDraggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      inputs: [...Array(4)],
    }
  }
  changeCircleColor = (index)  => {
    const { inputs } = this.state;
    inputs.splice(index, 1, this.state.current);
    console.log(inputs);
    this.setState({inputs: inputs})
  }
  setCurrentDrag = (color) => {
    this.setState({current: color})
  }
  render() {
    return (
      <div>

        <div style={wrapperStyle}>
          {colors.map((color, index) => {
            return(
              <CircleDrag 
                key={'color' + index.toString()} 
                color={color}
                setCurrentDrag={this.setCurrentDrag}/>
            )
          })}
        </div>

        <div style={wrapperStyle}>
          {inputs.map((color, index) => {
            return (
              <CircleDrop 
                key={'input' + index.toString()} 
                color={this.state.inputs[index]} 
                index={index}
                changeCircleColor={this.changeCircleColor}/>
            )
          })}
        </div>
        
        <InputButton />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(InputDraggable);