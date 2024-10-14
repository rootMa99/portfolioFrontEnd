import { useEffect, useState } from "react";


// const getWindowDimensions=()=> {

function getWindowDimensions() {

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowDemension = () => {
  const [windowDemension, setWindowDimension] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimension(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  
  return windowDemension;
}

export default useWindowDemension;