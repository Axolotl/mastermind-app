import React, { Component } from 'react';
//import HTML5Backend from 'react-dnd-html5-backend';
//import { DragDropContext } from 'react-dnd';
//import { connect } from 'react-redux';
//import { addPlay } from '../actions';
//import { compose } from 'redux';

import Drag from './Drag';
import Drop from './Drop';
import Button from '../components/Button';
import ErrorText from '../components/ErrorText';
import Divider from '../components/Divider';
import Wrapper from '../components/FlexWrapper';

import { colors } from './Colors';

class Input extends Component {
  constructor(props) {
    super(props);
    this.props.setCode();
    this.state = {
      current: '',
      inputs: [...Array(4)],
      invalid: false,
    }
  }

  changeCircleColor = (index)  => {
    let { inputs } = this.state;
    let newInputs = inputs.slice(0, index).concat(this.state.current).concat(inputs.slice(index+1));
    this.setState({inputs: newInputs, invalid: false})
  }

  setCurrentDrag = (color) => {
    this.setState({current: color})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let abort = false;


    this.state.inputs.map(input => {
      if (input == null) {
        this.setState({invalid: true});
        abort = true;
      }
    })

    if (!abort) {
      this.props.addPlay(this.state.inputs);
      this.setState({
        inputs: [...Array(4)],
        invalid: false,
      });
    }
  }

  render() {
    const { outcome } = this.props;

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
        
        {outcome ||
          <Button handleSubmit={this.handleSubmit} value='Submit'/>
        }

        {this.state.invalid && 
          <ErrorText>Invalid entry. Please fill all circles.</ErrorText> 
        }

        {outcome &&
          <ErrorText>Game Over! Play new game?</ErrorText>
        }
      </div>
    )
  }
}

export default Input;


// export default compose(
//   DragDropContext(HTML5Backend),
//   connect()
// )(Input);