import React, { Component } from 'react';

import Input from './Input';
import MapPlayToBoard from './MapPlayToBoard';

import Explainer from '../components/Explainer';
import Column from '../components/Column';
import Wrapper from '../components/AppWrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>

        <Column>
          <Explainer />
          <Input />
        </Column>

        <Column> 
          <MapPlayToBoard />
        </Column>

      </Wrapper>
    )
  }
}

export default App