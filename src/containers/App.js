import React, { Component } from "react";
import MapPropsToInput from "./MapPropsToInput";
import MapPropsToBoard from "./MapPropsToBoard";

import ExplainerTitle from "../components/ExplainerTitle";
import ExplainerSubtitle from "../components/ExplainerSubtitle";
import Column from "../components/Column";
import Wrapper from "../components/AppWrapper";
import MapPropsToInfoContainer from "./MapPropsToInfoContainer";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Column>
          <ExplainerTitle />
          <ExplainerSubtitle />
          <MapPropsToInput />
          <MapPropsToInfoContainer />
        </Column>

        <Column>
          <MapPropsToBoard />
        </Column>
      </Wrapper>
    );
  }
}

export default App;
