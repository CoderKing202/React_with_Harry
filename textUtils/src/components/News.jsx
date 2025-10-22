import React from 'react'
import NewsItem from './NewsItem'

function News() {
  return (
    <div className="container my-3">
      <h2>NewsMonkey - Top Headlines</h2>
      <div className="row">
        <div className="col md-4">
        <NewsItem/>
        </div>
        <div className="col md-4">
        <NewsItem/>
        </div>
        <div className="col md-4">
        <NewsItem/>
        </div>
      
        
      </div>
      
      
    </div>
    
  )
}

export default News