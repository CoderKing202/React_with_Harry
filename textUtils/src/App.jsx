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
<<<<<<< HEAD
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({message,type})
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

=======
>>>>>>> f643118ae535b05c1fb2780f8598a027aff9a64b
  const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor="#042743"
<<<<<<< HEAD
    showAlert("Dark mode has been enabled", "success")
=======
>>>>>>> f643118ae535b05c1fb2780f8598a027aff9a64b
  } 
  else{
    setMode("light")
    document.body.style.backgroundColor="white"
<<<<<<< HEAD
    showAlert("Light mode has been enabled", "success")
=======
>>>>>>> f643118ae535b05c1fb2780f8598a027aff9a64b
  } 
  }

  return (
 <>
<Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
<<<<<<< HEAD
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading ="Enter the text to analyze below" mode={mode} 
showAlert={showAlert}/>
=======
<div className="container my-3">
<TextForm heading ="Enter the text to analyze below" mode={mode}/>
>>>>>>> f643118ae535b05c1fb2780f8598a027aff9a64b
{/* <About/> */}
</div>
 </>
  )
}

export default App
