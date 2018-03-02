import React from 'react';
import { connect } from 'react-redux';
import { addPlay } from '../actions';

//create handler for dispatching plays/inputs to store
let createHandlers = function(dispatch) {
  let handleDispatch = function(data) {
    dispatch(addPlay(data))
  };
  return {
    handleDispatch,
  };
}

//create component for validating input and passing it to handler
class Input extends React.Component {
  constructor(props) {
    super(props);
    //passing in props and linking them with handler
    this.handlers = createHandlers(this.props.dispatch);
    this.state = {
      value: '',
      valid: false,
      firstAttempt: true,
    };
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleSubmit = (event) => {
    let value = this.state.value;
    console.log(`YOU ENTERED: ${value}`);
    if (value.match(/^[1-6]{4}$/)) {
      console.log('Valid entry');
      this.setState({valid: true});
      //passing valid input to dispatch handler
      this.handlers.handleDispatch(value);
    }
    else {
      console.log('Invalid entry');
      this.setState({
        valid: false,
        firstAttempt: false,
      });
    }
    event.preventDefault();
  }
  render() {
    return (
      <div id='input-validation'>
        <form onSubmit={this.handleSubmit}>
          <input
            className='input'
            type='text' 
            placeholder='valid if matches: /^[1-6]{4}$/'
            autoComplete='off'
            onChange={this.handleChange}
            required/>
        </form>
        {!this.state.valid && !this.state.firstAttempt ? (
          <p id='error-text'>Invalid entry. Please try again.</p> 
        ) : ('')}
      </div>
    )
  }
}


export default connect()(Input);