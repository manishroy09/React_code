import React from 'react'
import { chdata } from './App'


const Child5 = () => {
  return (
    <>
    <h1>child 5 is here</h1>
    <chdata.Consumer>
        {
            (city)=>{return <h1>{city}</h1>}
        }
    </chdata.Consumer>
    </>
    
  )
}

export default Child5
