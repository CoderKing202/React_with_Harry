import React from 'react'


function NewsItem(props) {
let  {title,description, imageUrl,newsUrl, author, date, source} = props

  return (
    <div className='my-3'>  
    <div className="card" style={{width: '18rem'}}>
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:'90%'}}>
    {source}
  </span>
  <img src={imageUrl?imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F009%2F796%2F821%2Foriginal%2Fhouse-not-available-on-white-background-not-available-sign-not-available-label-flat-style-vector.jpg&f=1&nofb=1&ipt=c57db91cac7a63b7dfffc3727daff5bb2cdc85017a58872cfa5ffe56cc6893ae"} className="card-img-top" alt="..."/>
   <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>

  </div>
</div>
    </div>
  )
}

export default NewsItem