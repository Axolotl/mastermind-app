import React from "react";

const buttonStyle = {
  display: "inline-block",
  borderRadius: "3px",
  padding: "0.5rem 0",
  margin: "0.5rem 0.25rem 0rem 0.25rem",
  width: "7rem",
  background: "transparent",
  color: "black",
  border: "1px solid black"
};

const InfoContainerButton = ({ handleSubmit, value, infoField }) => (
  <form onClick={handleSubmit}>
    <input
      type="button"
      style={Object.assign({}, infoField, buttonStyle)}
      value={value}
    />
  </form>
);

export default InfoContainerButton;
