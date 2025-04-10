import React, { createContext, useEffect, useState } from 'react'
import LoginValid from './LoginValid';
import { useNavigate } from 'react-router-dom';


let sanddata = createContext();


const Login = () => {
   
 let [data,setUserdata] = useState({})

 let navigator =useNavigate()

 let [frmdata, setfrmdat] = useState({
  user:"", pass:""
})
   

  function formdata(e){
    const {name, value} =e.target
    setfrmdat({...frmdata, [name]:value})
 }
 
 function finalSubmit(e){
     e.preventDefault()
    //  console.log(frmdata)
     localStorage.setItem("userdata",JSON.stringify(frmdata))
     navigator('/loginvalid')
 }

    
 
    


  return (
    <>
    <form onSubmit={finalSubmit}>
    <label htmlFor="">UserName : </label>
    <input type="text" name='user' onChange={formdata} /><br /><br />

    <label htmlFor="">Password</label>
    <input type="text" name='pass' onChange={formdata} /><br /><br />

    <input type="submit" value="submit" />
    </form>
    {/* <sanddata.Provider value={data}>
     <LoginValid/>
    </sanddata.Provider> */}
    </>
  )
}

export default Login
export {sanddata}