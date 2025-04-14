import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Insert = () => {

    let navigator = useNavigate()

    let [Frmdata, Setfrmdata] = useState({
        uname:"", age:"",contact:"",city:""
    })

      function HandelInput(e){
        const {name, value} = e.target
        Setfrmdata({...Frmdata, [name]:value})
      }
      function finalSubmit(e){
        e.preventDefault()
        console.log(Frmdata);
        axios.post('http://localhost:3000/userdata', Frmdata)
        navigator('/fetchapi')
      }
  return (
    <>
    <form action="" onSubmit={finalSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name='uname' onChange={HandelInput} /><br />

        <label htmlFor="">Age</label>
        <input type="text" name='age'onChange={HandelInput} /><br />

        <label htmlFor="">Contact</label>
        <input type="text" name='contact' onChange={HandelInput} /><br />

        <label htmlFor="">City</label>
        <input type="text" name='city' onChange={HandelInput} /><br />

        
        <input type="submit" /><br />
    </form>
    </>
  )
}

export default Insert
