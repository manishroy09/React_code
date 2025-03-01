
function Event (){
    function fun(){
        alert("Working")
    }
    function db(){
        alert("on db click")
    }
    function MouseEnter(){
        alert("On Mouse Enter")
    }
    let st ={
        margin: "10px"
    }
    return (
        <>
        <div>
        <button style={st} onClick={fun}>Click</button>
        <button onDoubleClick={db}>DbClick</button>
        <button style={st} onMouseEnter={MouseEnter}>Mouse Enter</button>
        </div>
        </>
    )
}

export default Event