import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'

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
    showAlert("Dark mode has been enabled", "success")
  } 
  else{
    setMode("light")
    document.body.style.backgroundColor="white"
    showAlert("Light mode has been enabled", "success")
  } 
  }

  return (
 <>
<Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading ="Enter the text to analyze below" mode={mode} 
showAlert={showAlert}/>
{/* <About/> */}
</div>
 </>
  )
}

export default App
