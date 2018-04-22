import React, { Component } from 'react';
import NameForm from './NameForm';
import Text from '../components/ExplainerText';

const flowStyle={
  display: 'flex',
}

class SubmitScore extends Component {
  // when user completes a game the following will happen: 
  // they will be presented with text that says: here's your score, would you like to save it?
  // then there will be a text entry field where they can enter their name
  // then there will be a submit button that will dispatch the name and score to the database
  // this component will the be replaced by a PLAY AGAIN?? component

  constructor() {
    super();
    this.state = {
      score: Math.floor(Math.random() * 100),
    };
  }

  handleSubmit = () => {
    // this function when called will dispatch shit to the db
    // i'm turning it off for now
    const { dispatchScore } = this.props;
    dispatchScore('testname', '44');
  }

  submit = values => {
    const { dispatchScore } = this.props;
    dispatchScore(values.name, this.state.score);
    this.setState({
      score: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const { score } = this.state;

    return (
      <div>

        <Text>You recieved a score of {score}. Would you like to submit this to the record? To do so, type in your name in the box and press enter.</Text>
        <NameForm onSubmit={this.submit} />
        
      </div>
    )
  }
}

export default SubmitScore