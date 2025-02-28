
import Child3 from "./Child3.jsx"

function Child2 (age){
    return (
        <>
        <h1>My age is {age.age} </h1>
        <Child3  age={age.age} />
        </>
    )
}

export  default Child2