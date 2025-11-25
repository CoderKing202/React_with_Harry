import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <NavBar/>
          <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
