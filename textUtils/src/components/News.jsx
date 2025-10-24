import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'

function News() {
  
  useEffect( ()=>{(async ()=>{
    let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=28df2a883ac44eedb7ef9cdac2329fa1&page=1&pageSize=20"
    let data = await fetch(url)  
    let parsedData = await data.json()
    setTotalResult(parsedData.totalResults)
    setNews(parsedData.articles)
  })()
},[])
const handlePrevClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=28df2a883ac44eedb7ef9cdac2329fa1&page=${page - 1}&pageSize=20`
    let data = await fetch(url)  
    let parsedData = await data.json()
    setNews(parsedData.articles)
    setPage( page - 1 )
} 
const handleNextClick = async ()=>{
    if(page + 1 > Math.ceil(totalResult/20)) 
    {
  }
  else{
    let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=28df2a883ac44eedb7ef9cdac2329fa1&page=${page + 1}&pageSize=20`
    let data = await fetch(url)  
    let parsedData = await data.json()
    setNews(parsedData.articles)
    setPage( page + 1 )
  }

}
  const [page,setPage] = useState(1)
  const [news,setNews] = useState([])
  const [totalResult,setTotalResult] = useState(0)

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
      <div class="container d-flex justify-content-between">
      <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
      <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
    }

export default News