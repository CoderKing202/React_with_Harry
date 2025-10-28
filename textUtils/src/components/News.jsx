import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'
import Spinner from './Spinner'

function News(props) {
  const [loading, setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [news,setNews] = useState([])
  const [totalResult,setTotalResult] = useState(0)
  const {pageSize, country="us",category="science"} = props// default values in destruction
  useEffect( ()=>{
  updateNews()
  
},[page])
const updateNews = async ()=>{
  
  const  url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=28df2a883ac44eedb7ef9cdac2329fa1&country=${country}&page=${page}&pageSize=${pageSize}`
  setLoading(true)
  let data = await fetch(url)  
  let parsedData = await data.json()
  setTotalResult(parsedData.totalResults)
  setNews(parsedData.articles)
  setLoading(false)
  console.log(page)
}
const handlePrevClick = async ()=>{
    setPage( page - 1 )
    
} 
const handleNextClick = async ()=>{
    if( !(page + 1 >= Math.ceil(totalResult/pageSize)) ) 
    {
    setPage( page + 1 )
    
  }

}


  return<div className="container my-3">
      <h1 className='text-center' style={{margin:'35px 0px'}}>NewsMonkey - Top Headlines</h1>
      { loading && <Spinner/>}
      <div className="row">
      {!loading && news.map((element)=>{
        return <div className="col md-3" key={element.url}>
        <NewsItem  title={element.title} description={element.description} 
        imageUrl={element.urlToImage}
        newsUrl = {element.url} 
        author={element.author}
        date={element.publishedAt}
        source = {element.source.name}
  />
  
        </div>
      })}
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
      <button disabled={page + 1 >= Math.ceil(totalResult/pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div>
      
    </div>
    }

export default News