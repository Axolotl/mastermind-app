import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';
import { addPlay } from '../actions';
import { compose } from 'redux';

import Drag from './Drag';
import Drop from './Drop';
import Button from './Button';
import ErrorText from './ErrorText';
import Divider from './Divider';
import Wrapper from './CircleWrapper';

import { colors } from './Colors';

class Input extends Component {
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

        <Wrapper>
          {colors.map((color, index) => {
            return(
              <Drag 
                key={'color' + index.toString()} 
                color={color}
                setCurrentDrag={this.setCurrentDrag}/>
            )
          })}
        </Wrapper>

        <Divider />

        <Wrapper>
          {this.state.inputs.map((color, index) => {
            return (
              <Drop 
                key={'input' + index.toString()} 
                color={this.state.inputs[index]} 
                index={index}
                changeCircleColor={this.changeCircleColor}/>
            )
          })}
        </Wrapper>
        
        <Button handleSubmit={this.handleSubmit} value='Submit'/>

        {this.state.invalid && 
          <ErrorText>Invalid entry. Please fill all circles.</ErrorText> 
        }
      </div>
    )
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect()
)(Input);