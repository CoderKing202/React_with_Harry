import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'

function News() {
  
  useEffect( ()=>{(async ()=>{
    let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=28df2a883ac44eedb7ef9cdac2329fa1"
    let data = await fetch(url)  
    let parsedData = await data.json()
    setNews(parsedData.articles)
  })()
},[])
 
  const [news,setNews] = useState([])
  return<div className="container my-3">
      <h1>NewsMonkey - Top Headlines</h1>
      <div className="row">
      {news.map((element)=>{
        return <div className="col md-3" key={element.url}>
        <NewsItem  title={element.title} description={element.description} 
        imageUrl={element.urlToImage}
        newsUrl = {element.url}/>
        </div>
      })}
        
      </div>
    </div>
    }

export default News