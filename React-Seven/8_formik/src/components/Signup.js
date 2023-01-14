import React from 'react'
import {useFormik} from 'formik';
import validationSchema from './validation';

function Signup() {
  const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
    initialValues: {
      email: "", //elementlerin name değerine bakar
      password: '',
      passwordConfirm: ''
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id='email' value={values.email} name="email" onChange={handleChange} onBlur={handleBlur}/>
          {errors.email && touched.email &&  <div>{errors.email}</div>}
        </div>
        <br></br>
        <br></br>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id='password'
            value={values.password}
            name="password"
            onChange={handleChange} onBlur={handleBlur}/>
            {errors.password && touched.password && <div>{errors.password}</div>}
        </div>
        <br></br>
        <br></br>

        <div>
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input
            id='password'
            value={values.passwordConfirm}
            name="passwordConfirm"
            onChange={handleChange} onBlur={handleBlur}/>
          {errors.passwordConfirm && touched.passwordConfirm && <div>{errors.passwordConfirm}</div>}
        </div>
        <br></br>
        <br></br>

        <button type="submit">Submit</button>
        <br/><br/>

        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  )
}

export default Signup