import Child2 from "./Child2.jsx"

function Child1 (props){
    return (
        <>
        <h1>My name is {props.name}</h1>
        <Child2 age="21" />
        </>
    )
}

export default Child1