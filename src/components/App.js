import React, { Component } from "react";

import Explainer from "./Explainer";
import Input from "./Input";
import MapPlayToBoard from "../containers/MapPlayToBoard";
import Column from "./Column";

const appStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  height: "100vh",
  fontFamily: "'Open Sans', sans-serif"
};

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <Column>
          <Explainer />
          <Input />
        </Column>

        <Column>
          <MapPlayToBoard />
        </Column>
      </div>
    );
  }
}

export default App;
