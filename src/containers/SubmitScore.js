import React, { Component } from 'react';

class SubmitScore extends Component {
  //when user completes a game the following will happen: 

  handleSubmit = () => {
    const { dispatchScore } = this.props;
    console.log('button pressed');
    dispatchScore('testname', '44');
  }

  render() {
    return (
      <div>
        <form onClick={this.handleSubmit}> 
          <input
            type='button'
            value='button here'
          />
        </form>
      </div>
    )
  }
}

export default SubmitScore