import React, { Component } from 'react';

import Drag from './Drag';
import Drop from './Drop';
import Button from '../components/Button';
import ErrorText from '../components/ErrorText';
import Divider from '../components/Divider';
import Wrapper from '../components/FlexWrapper';

import { colors } from './Colors';

class Input extends Component {
  changeCircleColor = (index)  => {
    const { setInvalid, addInput, current } = this.props;
    setInvalid(false);
    addInput(current, index);

  }

  setCurrentDrag = (color) => {
    const { setCurrent } = this.props;
    setCurrent(color);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let abort = false;
    const { inputs, addPlay, clearInputs, setInvalid } = this.props;

    inputs.map(input => {
      if (input == null) {
        setInvalid(true);
        abort = true;
      }
    })

    if (!abort) {
      addPlay(this.props.inputs);
      clearInputs();
      setInvalid(false);
    }
  }

  render() {
    const { outcome } = this.props;

    return (
      <div>

        {!outcome &&
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
              {this.props.inputs.map((color, index) => {
                return (
                  <Drop 
                    key={'input' + index.toString()} 
                    color={this.props.inputs[index]} 
                    index={index}
                    changeCircleColor={this.changeCircleColor}/>
                )
              })}
            </Wrapper>
            
            <Button handleSubmit={this.handleSubmit} value='Submit'/>

            {this.props.invalid && 
              <ErrorText>Invalid entry. Please fill all circles.</ErrorText> 
            }
          </div>
        }

      </div>
    )
  }
}

export default Input;