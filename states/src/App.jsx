import { useState } from "react"
import About from "./About.jsx"




function App (){
  let [name, setName] = useState("Manish kumar")

  function fun(){
    setName("Yuvraj roy")
  }
  
  let [age, setAge] = useState(21)

  let [contact, setContact] =  useState(12334)
  function fcontact(){
    setContact(6206743012)
  }
  let [color,ChangeColor] = useState("blue")

  return(
    <>
    <div style={{ height:"100vh",backgroundColor:color}}>
    <h1>My name is {name} </h1>
    <button onClick={fun}>Change name</button>

    <h1>My age is {age}</h1>
    <button onClick={()=>setAge(90)}>Change age</button>

    <h1>My contact no is {contact}</h1>
    <button onClick={fcontact}>Change contact</button>

    <button onClick={()=>ChangeColor("red")}>Red</button>
    <button onClick={()=>ChangeColor("yellow")}>Yellow</button>
    <button onClick={()=>ChangeColor("pink")}>Pink</button>
    <button onClick={()=>ChangeColor("lightblue")}>light Blue</button>
    <About/>
    </div>
    </>
  )
}

export default App

