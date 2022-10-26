import { Suspense, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TimelinePage from "./pages/TimelinePage";
import PortfolioPage from "./pages/PortfolioPage";
import useWindowDemension from "./components/hooks/useWindowDemension";
import NavBarMenu from "./components/layout/NavBarMenu";
import c from "./App.module.css";

import Articles from "./components/Articles";
import ArticleDetails from "./components/articles/ArticleDetails";
import ProjectDetails from "./components/project/ProjectDetails";

function App() {
  const [navBar, setNavBar] = useState(true);
  const { height, width } = useWindowDemension();

  console.log("h: " + height, "W :" + width);
  if (width <= 820 && navBar) {
    setNavBar(false);
  }
  if (width > 820 && !navBar) {
    setNavBar(true);
  }

  return (
    <div className={c.container}>
      {navBar && <NavBar />}
      {!navBar && <NavBarMenu />}
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route
            exact
            path="about"
            element={<AboutPage dimensions={{ width, height }} />}
          />
          <Route
            path="articles"
            element={<Articles dimensions={{ width, height }} />}
          >
            <Route path=":id" element={<ArticleDetails />} />
          </Route>
          <Route exact path="timeline" element={<TimelinePage />} />
          <Route exact path="portfolio" element={<PortfolioPage />}>
            <Route path=":id" element={<ProjectDetails />} />
          </Route>

          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
