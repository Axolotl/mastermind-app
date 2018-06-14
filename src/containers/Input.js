import React, { Component } from "react";

import Drag from "./Drag";
import Drop from "./Drop";
import Button from "../components/Button";
import ErrorText from "../components/ErrorText";
import Wrapper from "../components/FlexWrapper";

import { colors } from "./Colors";

class Input extends Component {
  changeCircleColor = index => {
    const { setInvalid, addInput, current } = this.props;
    setInvalid(false);
    addInput(current, index);
  };

  setCurrentDrag = color => {
    const { setCurrent } = this.props;
    setCurrent(color);
  };

  handleSubmit = e => {
    e.preventDefault();
    let abort = false;
    const {
      inputs,
      addPlay,
      clearInputs,
      setInvalid,
      setGameOverError,
      outcome,
      gameOverError
    } = this.props;

    inputs.map(input => {
      if (input == null) {
        abort = true;
        if (!outcome) {
          setInvalid(true);
        }
      }
    });

    if (outcome != null) {
      setGameOverError(true);
    }

    if (!abort && outcome == null) {
      addPlay(this.props.inputs);
      clearInputs();
      setInvalid(false);
    }
  };

  render() {
    const { outcome, gameOverError } = this.props;

    return (
      <div>
        <div>
          <Wrapper>
            {colors.map((color, index) => {
              return (
                <Drag
                  key={"color" + index.toString()}
                  color={color}
                  setCurrentDrag={this.setCurrentDrag}
                />
              );
            })}
          </Wrapper>

          <Wrapper>
            {this.props.inputs.map((color, index) => {
              return (
                <Drop
                  key={"input" + index.toString()}
                  color={this.props.inputs[index]}
                  index={index}
                  changeCircleColor={this.changeCircleColor}
                />
              );
            })}
          </Wrapper>

          <Button handleSubmit={this.handleSubmit} value="Submit" />

          {this.props.invalid && (
            <ErrorText>Invalid entry. Please fill all circles.</ErrorText>
          )}

          {gameOverError && (
            <ErrorText>
              Game over. You cannot make more plays to this game.
            </ErrorText>
          )}
        </div>
      </div>
    );
  }
}

export default Input;
