import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
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
    console.log(`YOU ENTERED: ${this.state.value}`);
    if (this.state.value.match(/^[1-6]{4}$/)) {
      console.log('Valid entry');
      this.setState({valid: true});
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

export default Input;