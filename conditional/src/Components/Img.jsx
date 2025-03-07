import { useState } from "react"


function Img(){
    let [img, setImg] = useState("")

    return (
        <>
        
        {img ? <img src="bick1.jpeg" alt="" /> : <img src="car1.jpeg" alt="" /> }
        <img onMouseEnter={()=>setImg(!img)} src="bick1.jpeg" alt="" />
        <img onMouseEnter={()=>setImg(!img)} src="car1.jpeg" alt="" />
        </>
    )
}

export default Img