import React, { createContext, useEffect, useState } from 'react'
import LoginValid from './LoginValid';


let sanddata = createContext();


const Login = () => {
   
 let [data,setUserdata] = useState({})
 let [frmdata, setfrmdat] = useState({
  username:"", pass:""
})
   

  function formdata(e){
    const {name, value} =e.target
    setfrmdat({...frmdata, [name]:value})
 }
 
 function finalSubmit(e){
     e.preventDefault()
     console.log(frmdata)
     localStorage.setItem("userdata",JSON.stringify(frmdata))
 }

    
 
     useEffect(()=>{
       let localdata = JSON.parse(localStorage.getItem('userdata'))
        setUserdata(localdata)
     },[finalSubmit])


  return (
    <>
    <form action="finalSubmit">
    <label htmlFor="">UserName : </label>
    <input type="text" name='username' onChange={formdata} /><br /><br />

    <label htmlFor="">Password</label>
    <input type="text" name='pass' onChange={formdata} /><br /><br />

    <input type="submit" value="submit" />
    </form>
    <sanddata.Provider value={data}>
     <LoginValid/>
    </sanddata.Provider>
    </>
  )
}

export default Login
export {sanddata}