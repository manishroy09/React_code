
import { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
  let [frmdata, setFrmdata] = useState({
    usernname:"",age:"", add: ""
  })
  function InputValue(e){
          const {name,value} = e.target
         setFrmdata({...frmdata , [name]:value})
  }

  return (
    <>
     <h1>Hello :  </h1>
     <form action="">
      <label htmlFor="">Name</label>
      <input type="text" name='username' onChange={InputValue}/><br /><br />

      <label htmlFor="">Age</label>
      <input type="number"  name='age'  onChange={InputValue}/><br /><br />

      <label htmlFor="">Address</label>
      <input type="text" name='add'  onChange={InputValue}/><br /><br />


     </form>

     <Form/>
    </>

  
  )
}

export default App
