import React, { useContext, useEffect, useState } from 'react'




  
const LoginValid = () => {


    
let [inputdata, setinputdata] = useState({
  user:"", pass:""
})
function inputValue(e){
    const {name, value} = e.target 
    setinputdata({...inputdata, [name]:value})
}
function onsubmit(e){
  e.preventDefault();
 
  let localdata = JSON.parse(localStorage.getItem('userdata'))

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
