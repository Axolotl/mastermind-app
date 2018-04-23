import React from 'react';
import { Field, reduxForm } from 'redux-form';

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const buttonStyle = {
  display: 'inline-block',
  borderRadius: '3px',
  margin:'0 3px 0 3px',
  width: '80px',
  background: 'transparent',
  color: 'black',
  border: '1px solid black',
  height: '22px',
}

let NameForm = props => {
  const { handleSubmit } = props
  return (
    <form style={wrapperStyle} onSubmit={handleSubmit}>

      <div style={{margin: '-2px 3px 0 3px'}}>
        <Field autoComplete='off' name='name' component='input' type='text' style={{width: '80px', border: '1px solid black', height: '18px'}} />
      </div>

      <button style={buttonStyle} type="submit">Submit</button>

    </form>
  )
}

NameForm = reduxForm({
  form: 'name'
})(NameForm)

export default NameForm