import React, { Component } from 'react';
import NameForm from './NameForm';
import Text from '../components/ExplainerText';

class SubmitScore extends Component {
  submit = values => {
    const { score, dispatchScore, setNewScore, fetchScoresSuccess } = this.props;
    dispatchScore(values.name, score);
    setNewScore('');
    fetchScoresSuccess('');
  }

  render() {
    const { score } = this.props;

    return (
      <div style={{marginBottom: '15px'}}>

        {score == '' ?
          <Text>Thank you! Your score has been submitted to the record.</Text>
          :
          <div>
            <Text>You recieved a score of {score}. Would you like to submit this to the record? To do so, type in your name in the box and press submit.</Text>
            <NameForm onSubmit={this.submit} />
          </div>
        }
        
      </div>
    )
  }
}

export default SubmitScore