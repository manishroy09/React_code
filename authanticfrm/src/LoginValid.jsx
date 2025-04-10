import React, { useContext, useEffect, useState } from 'react'
import { sanddata } from './Login'



  
const LoginValid = () => {

  // let savedata = useContext(sanddata)

   useEffect(()=>{
       let localdata = JSON.parse(localStorage.getItem('userdata'))
        // setUserdata(localdata)
     },[onsubmit])
    
let [inputdata, setinputdata] = useState({
  user:"", pass:""
})
function inputValue(e){
    const {name, value} = e.target 
    setinputdata({...inputdata, [name]:value})
}
function onsubmit(e){
  e.preventDefault();
  if(inputdata.user!=localdata.user || inputdata.pass!=localdata.pass){
      alert("User NOt Found")
  }else{
      alert("login Success")
  }
}

  return (
   <>
   <form onSubmit={onsubmit}>
   <label htmlFor="">Enter UserName</label>
   <input type="text" name='user' onChange={inputValue}/><br /><br />
   <label htmlFor="">Enter PassWord</label>
   <input type="text" name='pass'  onChange={inputValue}/><br /><br />
   <input type="submit" value="login" />
   </form>
   </>
  )
}

export default LoginValid
