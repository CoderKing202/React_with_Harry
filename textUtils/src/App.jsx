import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/favicon.ico'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
const Test =()=>{
  return(<h1>Hello</h1>)
}

function App() {
  const [mode,setMode] = useState('light')//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({message,type})
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor="#042743"
    document.title = "TextUtils - Dark Mode"
    // setInterval(()=>{
    //   document.title = "TextUtils is amazing"
    // },2000)
    // setInterval(()=>{
    //   document.title = "Install TextUtils now"
    // },1500)
    showAlert("Dark mode has been enabled", "success")

  } 
  else{
    setMode("light")
    document.body.style.backgroundColor="white"
    document.title = "TextUtils - Light Mode"
    showAlert("Light mode has been enabled", "success")
  } 
  }

  return (
 <>
 <Router>
<Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
  <Route path='/'element={<TextForm heading="Enter the text to analyze below" mode={mode} 
showAlert={showAlert}/>}/> 
  <Route path="/about" element={<About/>}/>
{/* <About/> */}
</Routes>
</div>
</Router>
{/* /** /users --> Component 1
 /users/home --> -->  Component2
 mybe it is not used anymore */ }
 </>
  )
}

export default App
