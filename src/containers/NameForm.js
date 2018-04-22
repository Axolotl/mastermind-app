import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NameForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>

      <div>
        <Field autoComplete='off' name='name' component='input' type='text' style={{width: '80px'}} />
      </div>

      {/*<button type="submit">Submit</button>*/}

    </form>
  )
}

NameForm = reduxForm({
  form: 'name'
})(NameForm)

export default NameForm