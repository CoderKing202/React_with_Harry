import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'
import Spinner from './Spinner'
import { string } from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


function News(props) {
  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const [loading, setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [news,setNews] = useState([])
  const [totalResult,setTotalResult] = useState(0)
  const {pageSize, country="us",category="science", apiKey} = props// default values in destruction
  useEffect( ()=>{
  updateNews()
  document.title = `${capitalizeFirstLetter(category)}- NewsMonkey`
},[page])
const updateNews = async ()=>{
  props.setProgress(10)
  const  url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&country=${country}&page=${page}&pageSize=${pageSize}`
  if(page == 1)
  setLoading(true)
  let data = await fetch(url)  
  props.setProgress(30)
  let parsedData = await data.json()
  setTotalResult(parsedData.totalResults)
  console.log(news.length)
  console.log(parsedData.totalResults)
  setNews(news.concat(parsedData.articles))
  setLoading(false)
  props.setProgress(100)
}

const fetchMoreData = async ()=>{
  setPage(page+1)
  // const  url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=28df2a883ac44eedb7ef9cdac2329fa1&country=${country}&page=${page}&pageSize=${pageSize}`
  // setLoading(true)
  // let data = await fetch(url)  
  // let parsedData = await data.json()
  // setTotalResult(parsedData.totalResults)
  // setNews(news.concat(parsedData.articles))
  // setLoading(false)
  // console.log(page)
}
return (<>
      <h1 className='text-center' style={{margin:'67px 0px 0px 0px'}}>NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines</h1>
      { loading && <Spinner/>}
      
      <InfiniteScroll
    dataLength={news.length}
    next={fetchMoreData}
    hasMore={news.length != totalResult}
    loader={<Spinner/>}
    
  >
    <div className="container">
    <div className="row">
    {news.map((element)=>{
        return <div className="col md-3" key={element.url}>
        <NewsItem  title={element.title} description={element.description} 
        imageUrl={element.urlToImage}
        newsUrl = {element.url} 
        author={element.author}
        date={element.publishedAt}
        source = {element.source.name}
  /> </div>
   
  
      })}
      </div>
      </div>
  </InfiniteScroll>
      
  </>)
    }

export default News