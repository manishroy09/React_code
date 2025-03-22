import React, { useContext } from 'react'
import { sanddata } from './main'


const Contact = () => {
    let acceptdata = useContext(sanddata)
  return (
    <>
    <h1>contact {acceptdata.name} {acceptdata.age }</h1>
    {/* <sanddata.Consumer>
        {
            (data)=>{return <h1> {data} </h1>}
        }
    </sanddata.Consumer> */}
    </>
  )
}

export default Contact
