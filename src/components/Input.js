import React from 'react';
import { connect } from 'react-redux';
import { addPlay } from '../actions';

//create component for validating input and passing it to handler
class Input extends React.Component {
  constructor(props) {
    super(props);
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
    if (value.match(/^[1-6]{4}$/)) {
      this.setState({valid: true});
      //dispatch value to application state
      this.props.dispatch(addPlay(value));
      //reset entry box
      this.setState({
        value: '',
      })
    }
    else {
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
            value={this.state.value}
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