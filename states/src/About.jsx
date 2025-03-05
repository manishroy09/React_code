import { useState } from "react"

function About (){

    let [arr,setArr] = useState({
        name:"Manish", contact:12344
    })
    let [num,setNum] = useState([1,5,6,7,8])
    let [color, ChangeColor] = useState("")
    
    return(
        <>
        <div style={{height:"100vh", backgroundColor:color}}>
        <h1>About {arr.name} {arr.contact} </h1> 
        <h1>Num are {num[0]}, {num[1]}, {num[2]}, {num[3]}, {num[4]}   </h1>
        <button onClick={()=>setArr({name:"Yuvraj", contact:62067})}>Set Object</button>
        <button onClick={()=>setNum(["Manish","Roy"])}>Set array</button>
        <button onClick={()=>ChangeColor("black")}>dark color</button>
        <button onClick={()=>ChangeColor("white")}>Ligth color</button>
        {/* <button onClick={()=>setNum(num[0]=10)}>Update array</button> */}
        </div>
        </>
    )
}

export default About