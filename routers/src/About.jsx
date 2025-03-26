import { useNavigate } from "react-router-dom"




function About(){
    let navigator = useNavigate()
  function servicee(){
       navigator('/services')
  }
    return(
        <>
        <h1>About page </h1>
        
        <button onClick={servicee}>Service</button>
      
        </>
    )
}

export default About