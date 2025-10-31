import './App.css'
import React from 'react'
import NavBar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from "react-top-loading-bar"
//Teacher is doing in class way but i will do it in functional component way
import { useState } from 'react'


const App=()=> {
  const [progress,setProgress] = useState(0)
  const apiKey = import.meta.env.VITE_APP_NEWS_API
const pageSize = 15
  return (
    <div>
      <Router>
      <NavBar/>
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        />
      <Routes>
      <Route path="/"element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} category="general" country="us"/>}></Route>
      <Route path="/business"element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} category="business" country="us"/>}></Route>
      <Route path="/entertainment"element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} category="entertainment" country="us"/>}></Route>
      <Route path="/health"element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} category="health" country="us"/>}></Route>
      <Route path="/science"element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} category="science" country="us"/>}></Route>
      <Route path="/sports"element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} category="sports" country="us"/>}></Route>
      <Route path="/technology"element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} category="technology" country="us"/>}></Route>
      </Routes>
      </Router>
    </div>
    
  )
}
export default App