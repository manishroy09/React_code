import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from "./Component/Home"
import Cart from "./Component/Cart"
import Profile from "./Component/Profile"
import Navbar from "./Component/Navbar"

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route index element={ <Home/>} />
      <Route path='/cart' element={ <Cart/>} />
      <Route path="/Profile" element={ <Profile/>} />
     </Routes>
    </>
  )
}

export default App
