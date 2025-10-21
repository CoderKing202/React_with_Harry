import './App.css'
import React, { Component } from 'react'
import NavBar from './components/Navbar'
import News from './components/News'
//Teacher is doing in class way but i will do it in functional component way
function App() {
  return (
    <div>
      <NavBar/>
      <News/>
    </div>
  )
}

export default App