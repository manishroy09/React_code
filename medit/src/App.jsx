import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route index element={ <Home/>} />
      <Route path='/' />
     </Routes>
    </>
  )
}

export default App
