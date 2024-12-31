import React from 'react'

const NewsItems = (props) => {
      let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
         <div className="card" >
          <div style={{position:'absolute',right: '0', display:'flex', justifyItems: 'flex-end' }}>
         <span className=" badge rounded-pill bg-danger" > {source}  </span>
          </div>
             <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/108074070-1733863751542-gettyimages-1251843094-20090101230415-99-325424.jpeg?v=1733863922&w=1920&h=1080":imageUrl} className="card-img-top" alt="."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                 </div>
        </div>
      </div>
    )}

export default NewsItems
