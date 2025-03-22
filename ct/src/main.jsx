import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let sanddata = createContext()
let data = {name:"Manish kumar", age: 21 , contact:1445423}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <sanddata.Provider value={data}>
    <App />
    </sanddata.Provider>
  </StrictMode>,
)

export {sanddata}