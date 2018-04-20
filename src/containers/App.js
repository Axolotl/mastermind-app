import React, { Component } from 'react';
import MapPropsToInput from './MapPropsToInput';
import MapPropsToBoard from './MapPropsToBoard';

import Explainer from '../components/Explainer';
import Column from '../components/Column';
import Wrapper from '../components/AppWrapper';
import MapPropsToScores from './MapPropsToScores';

class App extends Component {
  render() {
    return (
      <Wrapper>

        <Column>
          <Explainer />
          <MapPropsToScores />
          <MapPropsToInput />
        </Column>

        <Column> 
          <MapPropsToBoard />
        </Column>

      </Wrapper>
    )
  }
}

export default App