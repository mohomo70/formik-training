import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Formik1 = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      secondName: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Too Long').required('required'),
      lastName: Yup.string().max(10, 'Too long').required('required'),
      email: Yup.string().email('Invaild Email').required('required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null))
    },
  })
  return (
    <form
      onSubmit={formik.handleSubmit}
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
      <label htmlFor='email'>Email Address</label>
      <input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor='firstName'>First Name: </label>
      <input
        id='firstName'
        name='firstName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.firstName}
        onBlur={formik.handleBlur}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor='secondName'>Second Name: </label>
      <input
        id='secondName'
        name='secondName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.secondName}
        onBlur={formik.handleBlur}
      />
      {formik.touched.secondName && formik.errors.secondName ? (
        <div>{formik.errors.secondName}</div>
      ) : null}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Formik1
