import React, { Component } from 'react';

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

const dragSourceStyle = {
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  border: '2px solid black',
  margin: '5px',
}

class InputSource extends Component {
  render() {
    return (
      <div style={wrapperStyle}>
        {colors.map(color => {
          return (
            <div key={color} style={Object.assign({}, {background: color}, dragSourceStyle)} />
          )
        })}
      </div>
    )
  }
}

export default InputSource;