import { useCallback, useEffect, useState } from "react";
//import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Player } from "video-react";
import Loading from "../layout/Loading";
import c from "./ProjectDetails.module.css";
import "../../../node_modules/video-react/dist/video-react.css";

let mobile = [];
let desktop = [];
const ProjectDetails = (p) => {
  const [dra, setDra] = useState(0);
  const [ind, setInd] = useState(0);
  const [indD, setIndD] = useState(0);

    const [loading, setLoading] = useState(true);
    const [respense, setRespense] = useState({});
    const [error, setError] = useState(false);
    const params = useParams();
    const id = params.id;

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `http://localhost:8081/portfolioApp/project/${id}`
            );
            const data = await res.json();
            console.log(data);
            if (data.message === `No record found ID is: ${id}`) {
                throw new Error(data.message);
            }
            setRespense(data);
            setLoading(false);
        } catch (er) {
            setError(er.message);
        }
        setLoading(false);
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const videoLink =
        Object.keys(respense).length > 0 &&
        respense.files.find((i) => i.fileType.split("/")[0] === "video");
    

    if (Object.keys(respense).length > 0&&dra===0) {
        
        for (const i in respense.files) {

            if (respense.files[i].fileName.search !== -1) {
                const item = respense.files[i].fileName.split("-")[0];
                if (item === "mobile") {
                    mobile.push(respense.files[i]);
                }
                if (item === "desktop") {
                    desktop.push(respense.files[i]);
                }
            }
        }
      setDra(dra + 1);
    }
  
  const changePicNext = (e) => {
    
    if (e.target.id === "mobileN") {
      if (mobile.length-1 > ind) {
        setInd(ind+1);
      }else{
        setInd(0);
      }
    }
     if (e.target.id === "desktopN") {
       if (desktop.length - 1 > indD) {
         setIndD(indD + 1);
       } else {
         setIndD(0);
       }
     }
    }
    console.log(ind, mobile.length);
  const changePicPrev = (e) => {
      
    if (e.target.id === "mobileP") {
      if (ind>=1) {
        setInd(ind - 1);
      } else {
        setInd(mobile.length - 1);
      }
    }
    if (e.target.id === "desktopP") {
      if (indD>=1) {
        setIndD(indD - 1);
      } else {
        setIndD(desktop.length - 1);
      }
    }
  }
  return (
    <main className={c.container}>
      {loading && <Loading />}
      {!loading && (
        <div className={c.wrapper}>
          <div className={c.videoContainer}>
            {/* <ReactPlayer
              url={[
                {
                  src: videoLink.fileDownloadUri,
                  type: videoLink.filleType,
                },
              ]}
              config={{
                file: {
                  attributes: {
                    crossOrigin: "true",
                  },
                },
              }}
              className={c.videoBg}
              controls
            /> */}
            <Player
              playsInline
              src={videoLink.fileDownloadUri}
            />
          </div>
          <div className={c.descriptionContainer}>
            <h1>{respense.projectName}</h1>
            <p>{respense.projectDescription}</p>
          </div>
          <div className={c.mobileImage}>
            <div
              id="mobileP"
              className={`${c.prev} ${c.btnchange}`}
              onClick={changePicPrev}
            >
              prev
            </div>
            <div
              id="mobileN"
              className={`${c.next} ${c.btnchange}`}
              onClick={changePicNext}
            >
              next
            </div>
            <img src={mobile[ind].fileDownloadUri} alt={mobile[ind].fileName} />
          </div>
          <div className={c.desktopImage}>
            <div
              id="desktopP"
              className={`${c.prev} ${c.btnchange}`}
              onClick={changePicPrev}
            >
              prev
            </div>
            <div
              id="desktopN"
              className={`${c.next} ${c.btnchange}`}
              onClick={changePicNext}
            >
              next
            </div>
            <img
              src={desktop[indD].fileDownloadUri}
              alt={desktop[indD].fileName}
            />
          </div>
        </div>
      )}
      {error && <h1>ERR</h1>}
    </main>
  );
};

export default ProjectDetails;
