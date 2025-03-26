import { use } from "react"
import { useState } from "react"


function New(){
    let [st,ChangeSt] = useState(true)
    
    let [num, setNum] = useState(0)

    function decr(){
        if(num!=0){
            setNum(num-5)
        }
    }
    return(
        <>
        {st ? <h1>This is New file</h1> : ""}

        <button onClick={()=>ChangeSt(false)}>Hide</button>
        <button onClick={()=>ChangeSt(true)}>show</button>

        {st ? <button onClick={()=>ChangeSt(!st)} >Hide</button> : <button onClick={()=>ChangeSt(!st)} >show</button>}

        <button onClick={()=>ChangeSt(!st)}>{ st ? "Hide" : "show"}</button>
        
         <h1>{num}</h1> 
        <button onClick={()=>setNum(num+5)}>inc</button>
        <button onClick={decr}>dec</button>
        </>
    )
}

export default New