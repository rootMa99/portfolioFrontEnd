import { useState } from "react";
import { useNavigate } from "react-router-dom";
import c from "./ArticleCard.module.css";
const ArticlesCard = (p) => {
  const [overlay, setOverlay] = useState(false);
  const navigate = useNavigate();
  const { width } = p.dimensions;

  const onMouseEnterHandler = (e) => {
    setOverlay(true);
  };
  const onMouseLeaveHandler = (e) => {
    setOverlay(false);
  };
  const navigateToId = (e) => {
    navigate(`/articles/${p.id}`);
  }

  const main = p.files.find(i => i.fileName.split(".")[0] === "main");
    
    let renderimg;
    let renderoverlay;
    if (width > 820) {
        renderimg = !overlay && (
          <img src={main.fileDownloadUri} alt={main.fileName} />
        );
        renderoverlay = overlay && (
          <div className={c.overlay}>
            <h1>{p.title}</h1>
            <p>{p.description}</p>
            <div className={c.btnHolder}>
              <button className={c.btn} onClick={navigateToId}> 
                SEE MORE
              </button>
            </div>
          </div>
        );
    
    }
    else {
        renderimg = <img src={p.pic.fileDownloadUri} alt={p.pic.name} />;
        renderoverlay = (
          <div className={c.overlay}>
            <h1>{p.title}</h1>
            <p>{p.description}</p>
            <div className={c.btnHolder}>
              <button className={c.btn} onClick={navigateToId}>
                SEE MORE
              </button>
            </div>
          </div>
        );
    }
    
    
  return (
    <div
      className={c.articleCard}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      >
          {renderimg}
          {renderoverlay}
    
    </div>
  );
};
export default ArticlesCard;
