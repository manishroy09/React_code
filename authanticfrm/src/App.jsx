
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import LoginValid from './LoginValid'


function App() {

  return (
    <>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path='/loginvalid' element={<LoginValid/>}/>
    </Routes>
    
    </>
  )
}

export default App
