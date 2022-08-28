import React from 'react'
import Formik1 from './formik/Formik1'
import Formik2 from './formik/Formik2'
const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Formik2 />
      <Formik1 />
    </div>
  )
}

export default App
