import React, { Component } from "react";
import Text from "./ExplainerText";

const Explainer = () => (
  <div>
    <Text>
      Play by guessing the hidden pattern of colors. After each guess, you will
      receive feedback on how close you got. Each black circle means you got the
      correct color in the correct position. Each white circle means you go the
      correct color but in the wrong position. Good luck.
    </Text>
    <Text>
      Play by dragging a color to each empty circle. Colors can be played more
      than once. Click submit when finished.
    </Text>
  </div>
);

export default Explainer;
