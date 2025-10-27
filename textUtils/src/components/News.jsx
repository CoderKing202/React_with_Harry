import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'
import Spinner from './Spinner'

function News(props) {
  const {pageSize, country="us",category="science"} = props// default values in destruction
  useEffect( ()=>{(async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=28df2a883ac44eedb7ef9cdac2329fa1&country=${country}&page=1&pageSize=${pageSize}`
    setLoading(true)
    let data = await fetch(url)  
    let parsedData = await data.json()
    setTotalResult(parsedData.totalResults)
    setNews(parsedData.articles)
    setLoading(false)
  })()
},[])
const handlePrevClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=28df2a883ac44eedb7ef9cdac2329fa1&page=${page - 1}&pageSize=${pageSize}`
    setLoading( true )
    let data = await fetch(url)  
    let parsedData = await data.json()
    setNews(parsedData.articles)
    setPage( page - 1 )
    setLoading( false )
} 
const handleNextClick = async ()=>{
    if( !(page + 1 >= Math.ceil(totalResult/pageSize)) ) 
    {
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=28df2a883ac44eedb7ef9cdac2329fa1&page=${page + 1}&pageSize=${pageSize}`
    let data = await fetch(url)  
    let parsedData = await data.json()
    setNews(parsedData.articles) 
    setPage( page + 1 )
    setLoading(false)
    console.log(parsedData.articles)
  }

}
  const [loading, setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [news,setNews] = useState([])
  const [totalResult,setTotalResult] = useState(0)

  return<div className="container my-3">
      <h1 className='text-center' style={{margin:'35px 0px'}}>NewsMonkey - Top Headlines</h1>
      { loading && <Spinner/>}
      <div className="row">
      {!loading && news.map((element)=>{
        return <div className="col md-3" key={element.url}>
        <NewsItem  title={element.title} description={element.description} 
        imageUrl={element.urlToImage}
        newsUrl = {element.url}/>
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