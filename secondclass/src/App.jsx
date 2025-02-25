import myimg from './nature.jpg'
import './App.css'

import { About,Contact } from './About.jsx'

function App() {
//  let name = "manish Kumar"
//  let age = 21

//  let st = {
//   color:"Yellow",
//   backgroundColor:"black",
//   padding:"20px"
//  }
  return (
    <>
   <div className='navbar'>
         <h1>Man</h1>
         <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Login</li>
         </ul>
   </div>
   <About/>
   <Contact/>
   {/* <Contact/>
   <Gallary/>
   <Services/> */}
   </>
   
  )
  
}

export default App
