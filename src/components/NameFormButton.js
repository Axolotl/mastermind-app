import React from "react";

const buttonStyle = {
  display: "inline-block",
  borderRadius: "3px",
  margin: "0 3px 0 3px",
  width: "80px",
  background: "transparent",
  color: "black",
  border: "1px solid black",
  height: "22px"
};

const NameFormButton = () => (
  <button style={buttonStyle} type="submit">
    Submit
  </button>
);

export default NameFormButton;
