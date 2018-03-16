import React from 'react';

const columnStyle = {
  textAlign: 'center',
  width: '300px',
  padding: '15px',
  margin: '30px 10px 30px 10px',
  borderRadius: '3px',
  borderStyle: 'solid',
  borderWidth: '2px',
}

const Column = ({ children }) => (
  <div style={columnStyle}>{children}</div>
)

export default Column;