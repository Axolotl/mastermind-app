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

const Button = ({ handleSubmit, value }) => (
  <form onClick={handleSubmit}>
    <input 
      type='button' 
      style={buttonStyle} 
      value={value}/>
  </form>
)

export default Button