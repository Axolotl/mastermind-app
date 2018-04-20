import React, { Component } from 'react';
import Explainer from '../components/Explainer';
import MapPropsToScores from './MapPropsToScores';
import Wrapper from '../components/FlexWrapper';

const buttonStyle = {
  display: 'inline-block',
  borderRadius: '3px',
  padding: '0.5rem 0',
  margin: '0.5rem 0.25rem 0rem 0.25rem',
  width: '7rem',
  background: 'transparent',
  color: 'black',
  border: '1px solid black',
}

class InfoContainer extends Component {
  changeDisplayInfo = (selection) => {
    const { setInfoField } = this.props;
    setInfoField(selection);
  }

  render() {
    const { infoField } = this.props;

    return (
      <Wrapper>

        <form onClick={() => this.changeDisplayInfo('explainer')}>
          <input 
            type='button' 
            style={Object.assign({}, {fontWeight: infoField == 'explainer' ? 'bold':''}, buttonStyle)}
            value='How to play'/>
        </form>

        <form onClick={() => this.changeDisplayInfo('scores')}>
          <input 
            type='button' 
            style={Object.assign({}, {fontWeight: infoField == 'scores' ? 'bold':''}, buttonStyle)}
            value='High Scores'/>
        </form>

        {infoField == 'explainer' ? 
          <Explainer /> : ''
        }

        {infoField == 'scores' ?
          <MapPropsToScores /> : ''
        }

      </Wrapper>
    )
  }
}

export default InfoContainer