import React from 'react'

const NewsItem = (props) => {
  let { imageUrl, heading, content, newsUrl, author, date, source } = props;
  return (
      <div className="card news-card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top news-img" alt="..." />
        <h2 className="card-text news-source">{source.name}</h2>
        <div className="card-body">
          <h5 className="card-title news-heading">{heading}</h5>
          <p className="card-text news-contant">{content}</p>
          <span className="card-author">
            By {author ? author : "Unknown"} on {date ? date : "Unknown"}
          </span>
        </div>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary news-read"
        >
          Read More...
        </a>
      </div>
    );
}

export default NewsItem;



