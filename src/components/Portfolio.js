import { Fragment, useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
//import { Outlet } from "react-router-dom";
import loop from "../assets/loop.mp4";
import Loading from "./layout/Loading";
import c from "./Portfolio.module.css";
import ProjectCard from "./project/ProjectCard";


const PAGEINIT = 0;

const Portfolio = (p) => {
  const [page, setPage] = useState(PAGEINIT);
const [hasLoadMore, setHasLoadMore] = useState(true);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProject = useCallback(async () => {
    setLoading(true);
    try {
      console.log("start fetching");
      const res = await fetch(
        `http://localhost:8081/portfolioApp/projects?page=${page}&limit=3`
      );
      const data = await res.json();
  console.log(data);
      if (data.message !== "No record found articles list is Empty") {
        setProjects([...projects, ...data._embedded.projectRests]);
      } else {
        setHasLoadMore(false);        
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setProjects([...projects]);
        setHasLoadMore(false);        

    }
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

const onClickHandler = (event) => {
  if (!hasLoadMore) {
    event.currentTarget.setAttribute("disabled", "");
    return;
  }
  setPage(page + 1);
};

  const classes = !hasLoadMore ? c.disable : "";
  const text = !hasLoadMore ? "WE FETCHED ALL" : "LOAD MORE";

  console.log(projects);

  return (
    <Fragment>
      <main className={c.mainContainer}>
        <video className={c.videoBg} autoPlay loop playsInline muted>
          <source src={loop} type="video/mp4" />
        </video>
        <div className={c.wrapper}>
          <div className={c.rows}>
            <h1 className={c.portfolio}>Portfolio</h1>

            <div className={c.projectHolder}>
              {loading ? (
                <Loading />
              ) : (
                projects.map((project) => (
                  <ProjectCard
                    key={project.projectId}
                    id={project.projectId}
                    title={project.projectName}
                    description={project.projectDescription}
                    files={project.files}
                  />
                ))
              )}
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
        </div>
      </main>
                <Outlet />
    </Fragment>
  );
};
export default Portfolio;


