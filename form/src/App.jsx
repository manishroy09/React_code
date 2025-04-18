
import { useEffect, useState } from 'react'
import './App.css'
import Form from './Form'
import Data from './Data'
import Login from './Login'



function App() {
  let [frmdata, setFrmdata] = useState({
    username:"",age:"", add: ""
  })
  function InputValue(e){
          const {name,value} = e.target
         setFrmdata({...frmdata , [name]:value})
  }

  function finalSubmit(e){
    e.preventDefault()
    console.log(frmdata)
    localStorage.setItem("userdata",JSON.stringify(frmdata))
  }
   let [userdataa,setUserdata] = useState({})
  //  console.log(userdataa);
   

    useEffect(()=>{
      let localdata = JSON.parse(localStorage.getItem('userdata'))
       setUserdata(localdata)
    },[finalSubmit])
     
    

  return (
    <>
     {/* <h1>Name is : {frmdata.username} </h1> */}

     <form onSubmit={finalSubmit}>
      <label htmlFor="">Name</label>
      <input type="text" name='username' onChange={InputValue}/><br /><br />

      <label htmlFor="">Age</label>
      <input type="number"  name='age'  onChange={InputValue}/><br /><br />

      <label htmlFor="">Address</label>
      <input type="text" name='add'  onChange={InputValue}/><br /><br />

      <input type="submit" value="Submit" />

     </form>
      <hr />

      <h1>User name : {userdataa.username}</h1>
       <h1> Age : {userdataa.age}</h1>
       <h1> Address :{userdataa.add}</h1>

     {/* <Form/>

     <Data/> */}

     <Login/>
    </>

  
  )
}

export default App
