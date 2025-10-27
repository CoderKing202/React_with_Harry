import './App.css'
import React, { Component } from 'react'
import NavBar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Teacher is doing in class way but i will do it in functional component way
function App() {
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
      <Route path="/"element={<News key="general" pageSize={5} category="general" country="us"/>}></Route>
      <Route path="/business"element={<News key="business" pageSize={5} category="business" country="us"/>}></Route>
      <Route path="/entertainment"element={<News key="entertainment" pageSize={5} category="entertainment" country="us"/>}></Route>
      <Route path="/health"element={<News key="health" pageSize={5} category="health" country="us"/>}></Route>
      <Route path="/science"element={<News key="science" pageSize={5} category="science" country="us"/>}></Route>
      <Route path="/sports"element={<News key="sports" pageSize={5} category="sports" country="us"/>}></Route>
      <Route path="/technology"element={<News key="technology" pageSize={5} category="technology" country="us"/>}></Route>
<Route path="/"element={<News key="story" pageSize={5} category="sports" country="us"/>}>
</Route>

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