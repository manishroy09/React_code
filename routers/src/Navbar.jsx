import { Link } from "react-router-dom"
import "./App.css"



function Navbar(){
    return(
        <>
        <nav className="navbar">
            <h1>Logo</h1>
            <ul>
                <li> <Link to="/" style={{textDecoration : "none" , color:"white"}} > Home </Link></li>
                <li><Link to="/about" style={{textDecoration : "none" , color:"white"}}> About </Link></li>
                <li><Link to="/services" style={{textDecoration : "none" , color:"white"}}> Services </Link></li>
                <li><Link to="/cart" style={{textDecoration : "none" , color:"white"}}> Cart </Link></li>
                <li><Link to="/login" style={{textDecoration : "none" , color:"white"}}> Login </Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar