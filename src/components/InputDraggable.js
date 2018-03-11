import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';
import { addPlay } from '../actions';
import { compose } from 'redux';

import CircleDrag from './CircleDrag';
import CircleDrop from './CircleDrop';
import InputButton from './InputButton';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple', 
]

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
      invalid: false,
    }
  }
  changeCircleColor = (index)  => {
    const { inputs } = this.state;
    inputs.splice(index, 1, this.state.current);
    this.setState({inputs: inputs})
  }
  setCurrentDrag = (color) => {
    this.setState({current: color})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let count = 0;
    for (let i=0;i<4;i++) {
      if (this.state.inputs[i] != null) {
        count++;
      }
    }
    if (count == 4) {
      this.props.dispatch(addPlay(this.state.inputs));
      this.setState({
        inputs: [...Array(4)],
        invalid: false,
      })
    }
    else {
      this.setState({invalid: true})
    }
    
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

        <p style={{fontWeight: 'bold'}}>--------------------</p>
        <div style={wrapperStyle}>
          {this.state.inputs.map((color, index) => {
            return (
              <CircleDrop 
                key={'input' + index.toString()} 
                color={this.state.inputs[index]} 
                index={index}
                changeCircleColor={this.changeCircleColor}/>
            )
          })}
        </div>
        
        <InputButton handleSubmit={this.handleSubmit} value='Submit'/>

        {this.state.invalid && 
          <p id='error-text'>Invalid entry. Please fill all circles.</p> 
        }
      </div>
    )
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect()
)(InputDraggable);