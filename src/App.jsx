import React from 'react'
import FreelanceForce from './component/Freelanceforce'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<FreelanceForce/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </>
     
    
  )
}

export default App