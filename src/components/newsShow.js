import React, { useContext } from "react";
import { NewsContext } from "./newsContext";
import NewsArticle from "./newsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">News App 👋</h1>
      <div className="all__news">
      <div className="row d-flex mx-0">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
          </div>
      </div>
    </div>
  );
}

export default News;