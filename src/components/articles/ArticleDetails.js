import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../layout/Loading";
import BackDrop from "../layout/BackDrop";
import c from "./ArticleDetail.module.css";

const ArticleDetails = (p) => {
  const [loading, setLoading] = useState(false);
  const [respense, setRespense] = useState({});
  const [ind, setInd] = useState(0);
  const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const onClickHandler = (e) => {
    navigate("/articles");
  };
  const changePicNext = () => {
    if (respense.files.length-1 > ind) {
      setInd(p => p + 1);
    } else {
      setInd(0);
    }
  }
  const changePicPrev = () => {
    if (ind > 0) {
      setInd(p => p - 1);
    } else {
      setInd(respense.files.length - 1);
    }
  }

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8081/portfolioApp/article/${id}`
      );
      const data = await res.json();
      if (data.message === `No record found ID is: ${id}`) {
        throw new Error(data.message);
      }
      setRespense(data);
    } catch (er) {
      setError(er.message);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(respense);
  return (
    <section className={c.articleSection}>
      <BackDrop click={onClickHandler} />
      {loading ? (
        <Loading />
      ) : !error ? (
        <div className={c.articleContainer}>
          {"files" in respense && (
            <div className={c.imgContainer}>
              <div
                className={`${c.prev} ${c.btnchange}`}
                onClick={changePicPrev}
              >
                prev
              </div>
              <div
                className={`${c.next} ${c.btnchange}`}
                onClick={changePicNext}
              >
                next
              </div>
              <img
                src={respense.files[ind].fileDownloadUri}
                alt={respense.files[ind].fileName}
              />
            </div>
          )}
          <div className={c.articleDetailText}>
            <h1 className={c.title}> {respense.title}</h1>
            <p className={c.description}>
              {respense.description}
            </p>
          </div>
        </div>
      ) : (
        <h1 className={c.title}>{error}</h1>
      )}
    </section>
  );
};

export default ArticleDetails;
