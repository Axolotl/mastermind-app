import React from "react";

const wrapperStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap"
};

const FlexWrapper = ({ children }) => (
  <div style={wrapperStyle}>{children}</div>
);

export default FlexWrapper;
