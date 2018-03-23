import React, { Component } from 'react';

//import Input from './Input';
import MapPropsToInput from './MapPropsToInput';
import MapPropsToBoard from './MapPropsToBoard';

import Explainer from '../components/Explainer';
import Column from '../components/Column';
import Wrapper from '../components/AppWrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>

        <Column>
          <Explainer />
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