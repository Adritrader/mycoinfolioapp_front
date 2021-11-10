import React from "react";
import '../styles/style.css';

function AnalysisDetail({ data }) {
  return (

    
    <div className="col-4 p-5 news-col">
    <a href={data.url}><div className="news card p-4">
      <h1 className="news__title">{data.title}</h1>
      <div className="col-12 mt-4 mb-4">
        <img src={data.urlToImage} className="image-news" />
      </div>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
    </a>
    </div>
    
  );
}

export default AnalysisDetail;