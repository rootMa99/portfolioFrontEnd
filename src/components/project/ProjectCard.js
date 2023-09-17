<<<<<<< HEAD
=======


>>>>>>> 317caa6 (first commit)
import { useNavigate } from "react-router-dom";
import c from "./ProjectCard.module.css";

const ProjectCard = p => {
  const navigate = useNavigate();

  const main = p.files.find((i) => i.fileName.split(".")[0] === "main");

  const navigateToId = (e) => {
    navigate(`/portfolio/${p.id}`);
  }



    return (
      
      <div className={c.cardHolder}>
        <h1 className={c.title}>{p.title}</h1>
        <div className={c.imageHolder}>
          <img src={main.fileDownloadUri} alt={main.fileName} />
        </div>
        <div className={c.descriptionHolder}>
          <p className={c.description}>
            {p.description}
           
          </p>
        </div>
        <div className={c.btnHolder}>
          <button className={c.btn} onClick={navigateToId}>SEE MORE</button>
        </div>
      </div>
    );

}


export default ProjectCard;