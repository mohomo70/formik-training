import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Formik2 = () => {
  return (
    <Formik
      initialValues={{ fistName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(10, 'must be 15').required('required'),
        lastName: Yup.string().max(10, 'must be 15').required('required'),
        email: Yup.string().email('invalid').required('required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null))
          setSubmitting(false)
        }, 400)
      }}
    >
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          width: '20%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor='firstName'>First Name</label>
        <Field name='firstName' type='text' />
        <ErrorMessage name='firstName' />
        <label htmlFor='lastName'>Last Name</label>
        <Field name='lastName' type='text' />
        <ErrorMessage name='lastName' />
        <label htmlFor='firstName'>Email Address</label>
        <Field name='email' type='email' />
        <ErrorMessage name='email' />

        <Field name='colors' as='select' className='my-select'>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
        </Field>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default Formik2
