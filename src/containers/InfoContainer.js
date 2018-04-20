import React, { Component } from 'react';
import Explainer from '../components/Explainer';
import MapPropsToScores from './MapPropsToScores';

class InfoContainer extends Component {
  changeDisplayInfo = (selection) => {
    const { setInfoField } = this.props;
    setInfoField(selection);
  }

  render() {
    const { infoField } = this.props;

    return (
      <div>

        <span 
          onClick={() => this.changeDisplayInfo('explainer')}
          style={{fontWeight: infoField == 'explainer' ? 'bold':''}}>
          How to play
        </span>

        <span> | </span>

        <span 
          onClick={() => this.changeDisplayInfo('scores')}
          style={{fontWeight: infoField == 'scores' ? 'bold':''}}>
          High scores
        </span>

        {infoField == 'explainer' ? 
          <Explainer /> : ''
        }

        {infoField == 'scores' ?
          <MapPropsToScores /> : ''
        }

      </div>
    )
  }
}

export default InfoContainer