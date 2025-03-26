import React, { useState } from 'react'


const Form = () => {

    let [name, setName] = useState()
      function InputName(n){
             
             setName(n.target.value)
      }

      
    let [age, setAge] = useState()
    function InputAge(a){
           
           setAge(a.target.value)
    }

    
    let [contact, setContact] = useState()
      function InputContact(c){
             
             setContact(c.target.value)
      }

      
    let [add, setAdd] = useState()
    function InputAdd(add){
           
           setAdd(add.target.value)
    }

    
    let [enroll, setEnroll] = useState()
      function InputEnroll(en){
             
             setEnroll(en.target.value)
      }
    
  return (
    <>
    <h1>My Name is : {name}</h1>
    <h1>My age is : {age}</h1>
    <h1>Contact number is : {contact}</h1>
    <h1>Address is : {add}</h1>
    <h1>Enrollment no. : {enroll}</h1>

     <form action="">
      <label htmlFor="">Name</label>
      <input type="text" onChange={InputName}/><br /><br />

      <label htmlFor="">age</label>
      <input type="number" onChange={InputAge}/><br /><br />

      <label htmlFor="">contact</label>
      <input type="number"onChange={InputContact}/><br /><br />

      <label htmlFor="">Address</label>
      <input type="text" onChange={InputAdd}/><br /><br />
      
      <label htmlFor="">Enrollment Number</label>
      <input type="text" onChange={InputEnroll}/><br /><br />
     </form>
    </>
  )
}

export default Form
