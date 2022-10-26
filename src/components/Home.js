import { Fragment, useState } from "react";
import lop from "../assets/lop.mp4";
import loop from "../assets/lop.webm";

import c from "./Home.module.css";
import HomeDescription from "./HomeDescription";
import BackDrop from "./layout/BackDrop";
import Loading from "./layout/Loading";

const Home = () => {
  const [videoLoad, setVideoLoad] = useState(false);

  const classes = !videoLoad ? c.gb : ""; 


  
  return (
    <main className={`${c.mainContainer} ${classes}`}>
      <video
        className={c.videoBg}
        autoPlay
        loop
        playsInline
        muted
        onLoadedData={() => {
          setVideoLoad(true);
        }}
      >
        <source src={lop} type="video/mp4" />
        <source src={loop} type="video/webm" />
      </video>
      {videoLoad && <HomeDescription />}
      {!videoLoad && (
        <Fragment>
          <BackDrop /> <Loading />
        </Fragment>
      )}
    </main>
  );
};
export default Home;


