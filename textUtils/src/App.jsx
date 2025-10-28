import './App.css'
import React, { Component } from 'react'
import NavBar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Teacher is doing in class way but i will do it in functional component way
function App() {
const pageSize = 15

  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
      <Route path="/"element={<News key="general" pageSize={pageSize} category="general" country="us"/>}></Route>
      <Route path="/business"element={<News key="business" pageSize={pageSize} category="business" country="us"/>}></Route>
      <Route path="/entertainment"element={<News key="entertainment" pageSize={pageSize} category="entertainment" country="us"/>}></Route>
      <Route path="/health"element={<News key="health" pageSize={pageSize} category="health" country="us"/>}></Route>
      <Route path="/science"element={<News key="science" pageSize={pageSize} category="science" country="us"/>}></Route>
      <Route path="/sports"element={<News key="sports" pageSize={pageSize} category="sports" country="us"/>}></Route>
      <Route path="/technology"element={<News key="technology" pageSize={pageSize} category="technology" country="us"/>}></Route>
      </Routes>
      </Router>
    </div>
    
  )
}
/* 
business
entertainment
general
health
science
sports
technology
*/
export default App