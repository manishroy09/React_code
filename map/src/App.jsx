import React from 'react'
import myimg from './assets/react.svg'

const App = () => {

  let product = [
    {
      id:1, pname:"Mobile", pprice:12000, pimg:myimg
    },
    {
      id:2, pname:"Laptop", pprice:90000, pimg:myimg
    }
  ]
  return (
    <>
    <div style={{display:"flex", gap:"20px"}}>
        {
          product.map((e)=>{return <div style={{ border:"5px solid black",backgroundColor:"greenyellow", padding:"20px", borderTopLeftRadius:"30px",borderBottomRightRadius:"30px"}}>
            <h1>Product Name : {e.pname} </h1>
            <h1>Product Price : {e.pprice} </h1>
            <img src={e.pimg} alt="" /><br />
            <button>Add to cart</button>
          </div>})
        }
    </div>
    </>
  )
}

export default App
