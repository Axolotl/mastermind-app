import React, { Component } from 'react';
import Circle from './Circle'
import InputButton from './InputButton';

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
  render() {
    return (
      <div>

        <div style={wrapperStyle}>
          {colors.map((color, index) => {
            return(
              <Circle key={'color' + index.toString()} color={color}/>
            )
          })}
        </div>

        <div style={wrapperStyle}>
          {inputs.map((color, index) => {
            return (
              <Circle key={'input' + index.toString()} color={color}/>
            )
          })}
        </div>
        
        <InputButton />
      </div>
    )
  }
}

export default InputDraggable;