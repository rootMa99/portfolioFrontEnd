import { useEffect, useState } from "react";

<<<<<<< HEAD
const getWindowDimensions=()=> {
=======
function getWindowDimensions() {
>>>>>>> 317caa6 (first commit)
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