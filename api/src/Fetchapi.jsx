import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchapi = () => {
   let [apidata, setapidata] = useState([])
   let [frm, setfrm] = useState(false)
   let [editdata, seteditdata] = useState({})

     
   function editHandel(e){
    const {name, value} = e.target
    seteditdata({...editdata, [name]:value})
   }

   function finalSubmit(e){
    e.preventDefault()
    axios.put(`http://localhost:3000/userdata/${editdata.id}`,editdata)
    .then(r=>alert("Edit Success"))
   }

   function mydelete(id){
    axios.delete(`http://localhost:3000/userdata/${id}`)
    alert("data deleted Success")
   }
    
    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then(res=>
            setapidata(res.data)
        )
    },[mydelete])
  return (
    <>
   <h1>Get data from api</h1>
   <table border="10px">
     <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>contact</th>
        <th>city</th>
        <th>Delete</th>
        <th>Edit</th>
     </tr>
     {
        apidata.map((e)=>{return <tr>
          <td>{e.id}</td>
          <td>{e.uname}</td>
          <td>{e.age}</td>
          <td>{e.contact}</td>
          <td>{e.city}</td>
          <td><button onClick={()=>mydelete(e.id)}>Delete</button></td>
          <td><button onClick={()=>{setfrm(true),seteditdata(e)}}>Edit</button></td>
        </tr>
           
        })
     }
   </table>

   {
    frm && (
      <>
      <h1>Edit form</h1>
    <form action="" onSubmit={finalSubmit}>
        <label htmlFor="">Id</label>
        <input type="text" name='uname' onChange={editHandel} value={editdata.id} readOnly /><br /><br />

        <label htmlFor="">Name</label>
        <input type="text" name='uname'onChange={editHandel} value={editdata.uname}  /><br /><br />

        <label htmlFor="">Age</label>
        <input type="text" name='age'onChange={editHandel} value={editdata.age}/><br /><br />

        <label htmlFor="">Contact</label>
        <input type="text" name='contact' onChange={editHandel} value={editdata.contact}/><br /><br />

        <label htmlFor="">City</label>
        <input type="text" name='city' onChange={editHandel} value={editdata.city} /><br /><br />

        
        <input type="submit" value="save"/><br />
    </form>
     </>
    )
   }
    </>
  )
}

export default Fetchapi
