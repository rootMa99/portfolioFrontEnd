import { Fragment, useCallback, useEffect, useState } from "react";
import { Outlet} from "react-router-dom";
import loop from "../assets/loop.mp4";
import c from "./Articles.module.css";
import ArticlesCard from "./articles/ArticleCard";
import Loading from "./layout/Loading";

const INITIAL_PAGE = 0;

const Articles = (p) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
const [hasLoadMore, setHasLoadMore] = useState(true);

  
  

const onClickHandler = (event) => {
  if (!hasLoadMore) {
    event.currentTarget.setAttribute("disabled", "");
    return
  };
  setPage(page + 1);
};

const fetchArticle = useCallback(async () => {
  if (!hasLoadMore) return;

  setLoading(true);
  try {
    const res = await fetch(
      `http://localhost:8081/portfolioApp/articles?page=${page}&limit=6`
    );
    const data = await res.json();
    if (data.message !== "No record found articles list is Empty") {
      setItems([...items, ...data._embedded.articleRests]);
    } else {
      setHasLoadMore(false);
    }
    setLoading(false);
  } catch (e) {
    setItems([...items]);
    setLoading(false);
    setHasLoadMore(false);

  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [page,hasLoadMore]);
  
  
  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  
  // const onScrollHandler = (e) => {
  //   console.log("kik" + page);
  //   console.log(
  //     "cond: " + window.scrollTop + " cond2: " + e.target.offsetHeight
  //   );
  //    if (!hasLoadMore) return;
  //   if (e.target.scrollTop >= e.target.offsetHeight - 400) {
  //     scrollToEnd();
  //     console.log("working");
  //   }
  // };

  const classes = !hasLoadMore ? c.disable : "";
  const text = !hasLoadMore ? "WE FETCHED ALL" : "LOAD MORE";
  
  return (
    <Fragment>
      <main className={c.mainContainer}>
        <video className={c.videoBg} autoPlay loop playsInline muted>
          <source src={loop} type="video/mp4" />
        </video>
        <div className={c.wrapper}>
          <div className={c.rows}>
            <h1 className={c.article}>Articles</h1>

            <div className={c.articlesHolder}>
              {loading ? (
                <Loading />
              ) : (
                items.map((article) => (
                  <ArticlesCard
                    dimensions={p.dimensions}
                    key={article.articleId}
                    id={article.articleId}
                    title={article.title}
                    description={article.description}
                    pic={article.files[0]}
                    files={article.files}
                  />
                ))
              )}
            </div>
            {!loading && (
              <button
                className={`${c.btn} ${classes}`}
                onClick={onClickHandler}
              >
                {text}
              </button>
            )}
          </div>
        </div>
      </main>
      <Outlet />
    </Fragment>
  );
};
export default Articles;
