import React from "react";

const appStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  height: "100vh",
  fontFamily: "'Open Sans', sans-serif"
};

const AppWrapper = ({ children }) => <div style={appStyle}>{children}</div>;

export default AppWrapper;
