import React, { Component } from 'react';
import NameForm from './NameForm';
import Text from '../components/ExplainerText';

// const flowStyle={
//   display: 'flex',
// }

class SubmitScore extends Component {
  // when user completes a game the following will happen: 
  // they will be presented with text that says: here's your score, would you like to save it?
  // then there will be a text entry field where they can enter their name
  // then there will be a submit button that will dispatch the name and score to the database
  // this component will the be replaced by a PLAY AGAIN?? component

  // constructor() {
  //   super();
  //   this.state = {
  //     score: Math.floor(Math.random() * 100),
  //     startdate: new Date(),
  //   };
  // }

  // handleSubmit = () => {
  //   // this function when called will dispatch shit to the db
  //   // i'm turning it off for now
  //   const { dispatchScore } = this.props;
  //   dispatchScore('testname', '44');
  // }

  submit = values => {
    const { score, dispatchScore } = this.props;
    dispatchScore(values.name, score);



    // let newdate = new Date();
    // let datediff = Math.floor((newdate - this.state.startdate)/1000);
    // alert(datediff);
    // this.setState({
    //   score: Math.floor(Math.random() * 100),
    // })

  }

  render() {
    const { score } = this.props;
    const { setStartTime, calculateScore } = this.props;

    return (
      <div style={{marginBottom: '15px'}}>

        <Text>You recieved a score of {score}. Would you like to submit this to the record? To do so, type in your name in the box and press submit.</Text>
        <NameForm onSubmit={this.submit} />

        {/*<form onClick={() => setStartTime()}>
          <input 
            type='button' 
            value='setStartTime'/>
        </form>

        <form onClick={() => calculateScore()}>
          <input 
            type='button' 
            value='calculateScore'/>
        </form>*/}
        
      </div>
    )
  }
}

export default SubmitScore