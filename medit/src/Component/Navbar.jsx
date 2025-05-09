import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav className="nav">
        <h1>Medit</h1>
        <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/Cart">Cart</Link></li>
           <li> <Link to="/Profile">Profile</Link> </li>
           
        </ul>
        <FontAwesomeIcon icon="fa-solid fa-user" />
    </nav>

    <Outlet/>
    </>
  )
}

export default Navbar
