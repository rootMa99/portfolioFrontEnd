import { useState } from "react";
import Tilt from "react-vanilla-tilt";
import loop from "../assets/loop.mp4";
import image from "../assets/1.jpg";
import c from "./About.module.css";
import AboutMe from "./about/AboutMe";

const About = (p) => {
  const [navBar, setNavBar] = useState(true);

  if (p.dimensions.width <= 820 && navBar) {
    setNavBar(false);
  }
  if (p.dimensions.width > 820 && !navBar) {
    setNavBar(true);
  }

  const section = (
    <section className={c.sectionTop}>
      <div className={c.profile}>
        <img src={image} alt="this for profile" />
        <h1>Anass Zeroual</h1>
        <p>I'm a web & software dev</p>
        <div className={c.rsociaux}>
          <a
            href="https://www.facebook.com/anas.zer.31/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/anasst_dc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anass-zeroual-54a90b1b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
  return (
    <main className={c.mainContainer}>
      <video className={c.videoBg} autoPlay loop playsInline muted>
        <source src={loop} type="video/mp4" />
      </video>
      <div className={c.wrapper}>
        
        {navBar && (
          <Tilt id={c.card} options={{ scale: 2, max: 25 }}>
            {section}
          </Tilt>
        )}
        {!navBar && <div className={c.mobile}>{section}</div>}

        <section className={c.aboutMe}>
          <AboutMe />
        </section>
      </div>
    </main>
  );
};
export default About;
