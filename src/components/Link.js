import React from 'react';

const linkStyle = {
  color: '#0000ee',
  display: 'inline-block',
  position: 'relative',
  textDecoration: 'none',
}

const Link = ({ href, children }) => (
  <a style={linkStyle} href={href}>{children}</a>
)

export default Link