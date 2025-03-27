import React, { useState } from 'react'


const Data = () => {

       let [logindata, Setlogindata] = useState({
        username:"", age:"", add:"", enrol:"",contact:""
       })
    function InputValue(e){
       const {name, value} = e.target 
       Setlogindata({...logindata, [name]:value })
    }

    function finalSubmit(e){
        e.preventDefault()
        console.log(logindata)
        
    }
  return (
   <>
   <form onSubmit={finalSubmit}>
    
   <label htmlFor="">Name</label>
      <input type="text" name='username' onChange={InputValue}/><br /><br />

      <label htmlFor="">Age</label>
      <input type="number"  name='age'  onChange={InputValue}/><br /><br />

      <label htmlFor="">Address</label>
      <input type="text" name='add'  onChange={InputValue}/><br /><br />
 
      <label htmlFor="">Enrollment</label>
      <input type="text" name='enrol'  onChange={InputValue}/><br /><br />

      <label htmlFor="">Contact</label>
      <input type="number" name='contact'  onChange={InputValue}/><br /><br />

      <input type="submit" value="Submit" />

   </form>
   </>
  )
}

export default Data
