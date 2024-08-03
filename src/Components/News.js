import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const UpdateNews = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    UpdateNews();
  }, [props.category]);

  const handlePrevBtnClick = async () => {
    setPage(page - 1);
    UpdateNews();
  };

  const handleNextBtnClick = async () => {
    setPage(page + 1);
    UpdateNews();
  };

  const fetchMoreData = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=36b3f240fa39461985c3fbf647a5240c&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <div className="news-container">
      <h2 className="top-heading">Top Headlines!</h2>

      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        {/* {this.state.loading && <Spinner />} */}
        <div className="news-row">
          {articles.map((article) => {
            let { urlToImage, title, content, author, publishedAt, source } =
              article;

            return (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  imageUrl={
                    urlToImage
                      ? urlToImage
                      : "https://www.livemint.com/lm-img/img/2024/01/25/1600x900/3-0-78199619-iStock-489948250-0_1679797574626_1706162033570.jpg"
                  }
                  heading={title ? title : "News"}
                  content={content ? content : "News content"}
                  newsUrl={article.url}
                  author={author}
                  date={publishedAt}
                  source={source}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>

      <div className="button-section">
        <button
          disabled={page <= 1}
          className="page-btn"
          onClick={handlePrevBtnClick}
        >
          &#10229; Previous
        </button>
        <button
          disabled={page >= Math.ceil(totalResults / props.pageSize)}
          className="page-btn"
          onClick={handleNextBtnClick}
        >
          Next &#10230;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
