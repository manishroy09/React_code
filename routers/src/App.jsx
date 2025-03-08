import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Services from "./Services"
import Cart from "./Cart"
import Login from "./Login"



function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route index element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/services" element={ <Services/> } />
      <Route path="/cart" element={ <Cart/> } />
      <Route path="/login" element={ <Login/> } />
    </Routes>
    </>
  )
}

export default App
