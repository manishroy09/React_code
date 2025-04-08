import React, { useContext, useState } from 'react'
import { sanddata } from './Login'

let savedata = useContext(sanddata)
  
let [inputdata, setinputdata] = useState({
    usename:"", pass:""
})
  function inputValue(e){
      const {name, value} = e.target 
      setinputdata({...inputdata, [name]:value})
  }
  function onsubmit(){
    e.preventDefault();
    if(e.username!=savedata.usename || e.pass!=savedata.pass){
        alert("User NOt Found")
    }else{
        alert("login Success")
    }
  }
  
const LoginValid = () => {
    
  return (
   <>
   <form action="onsubmit">
   <label htmlFor="">Enter UserName</label>
   <input type="text" name='username' onChange={inputValue}/><br /><br />
   <label htmlFor="">Enter PassWord</label>
   <input type="text" name='pass'  onChange={inputValue}/><br /><br />
   <input type="submit" value="login" />
   </form>
   </>
  )
}

export default LoginValid
