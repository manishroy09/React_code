
import Child3 from "./Child3.jsx"

function Child2 (props){
    let {age} = props
    return (
        <>
        <h1>My age is {age} </h1>
        <Child3  age1={age} />
        </>
    )
}

export  default Child2