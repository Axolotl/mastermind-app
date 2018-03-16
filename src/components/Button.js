import React, { Component } from 'react';

const buttonStyle = {
  display: 'inline-block',
  borderRadius: '3px',
  padding: '0.5rem 0',
  margin: '0.5rem 1rem',
  width: '7rem',
  background: 'transparent',
  color: 'black',
  border: '2px solid black',
  fontWeight: 'bold',
}

class Button extends Component {
  render() {
    return (
      <form onClick={this.props.handleSubmit}>
        <input 
          type='button' 
          style={buttonStyle} 
          value={this.props.value}/>
      </form>
    )
  }
}

export default Button