import c from "./AboutMe.module.css";
import AboutMeInfo from "./AboutMeInfo";
import AboutMeSkills from "./AboutMeSkills";

const AboutMe = (p) => {
  return (
    <div className={c.container}>
      <div className={c.row}>
        <div className={`${c["sc-title"]} ${c.pdd}`}>
          <h1 id={c.about}>
            <b> About</b>
            <b> Me</b>
          </h1>
        </div>
      </div>
      <div className={`${c["about-cont"]} ${c.pdd}`}>
        <div className={c.row}>
          <div className={`${c["about-ctn-text"]} ${c.pdd}`}>
            <p>
              Hello !! Before talking about qualifications and professional
              abilities, I would like to introduce myself. my name is{" "}
              <mark>
                <b> Anass Zeroual</b>
              </mark>
              I am from Morocco. Taking web development as a profession not only
              fulfills my pocket but also my heart because it has been my passion
              since my early teenage.
            </p>
          </div>
        </div>
      </div>
      <div className={c.rows}>
        <AboutMeInfo />
        <AboutMeSkills />
      </div>
    </div>
  );
};

export default AboutMe;
