import Event from './Event.jsx'
import './App.css'

function App(){
  // let name= prompt("Enter Your name") // it will give pop two times due to stractmode
   let emp ={
    name:"Manish",
    age:21,
    Contact:12344
   }

   let arr =["histor","geographi","Science","Math","compute","chemistry","Hindi"]
  return(
    <>
    <div className="main">
    <h1>Welcome {name} </h1>
    <h1>My name is {emp.name} ,Age is {emp.age} and Contact number is {emp.Contact} </h1>
    <h1>Array are {arr[0]}, {arr[1]}, {arr[2]}, {arr[3]}, {arr[4]}, {arr[5]}, {arr[6]} </h1>
    <Event/>
    </div>
    </>
  )
}

export default App