import React, { Component } from "react";
import Explainer from "../components/Explainer";
import MapPropsToScores from "./MapPropsToScores";
import Wrapper from "../components/FlexWrapper";
import Button from "../components/InfoContainerButton";

class InfoContainer extends Component {
  changeDisplayInfo = selection => {
    const { setInfoField } = this.props;
    setInfoField(selection);
  };

  render() {
    const { infoField } = this.props;

    return (
      <Wrapper>
        <Button
          handleSubmit={() => this.changeDisplayInfo("explainer")}
          value="How to play"
          infoField={{ fontWeight: infoField == "explainer" ? "bold" : "" }}
        />

        <Button
          handleSubmit={() => this.changeDisplayInfo("scores")}
          value="High scores"
          infoField={{ fontWeight: infoField == "scores" ? "bold" : "" }}
        />

        {infoField == "explainer" ? <Explainer /> : ""}

        {infoField == "scores" ? <MapPropsToScores /> : ""}
      </Wrapper>
    );
  }
}

export default InfoContainer;
