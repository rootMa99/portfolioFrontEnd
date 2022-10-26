import c from "./AboutMe.module.css";

const AboutMeSkills = (p) => {
  return (
    <div className={`${c.skills} ${c.pdd}`}>
      <div className="row">
        <div className={c["skills-info"]}>
          <h5>Javascript + React Js + Next Js</h5>
          <div className={c.progress}>
            <div className={c["progress-in"]} style={{ width: "80%" }}></div>
            <div className={c["sk-perc"]}>80%</div>
          </div>
        </div>
        <div className={c["skills-info"]}>
          <h5>Java + Spring Boot</h5>
          <div className={c.progress}>
            <div className={c["progress-in"]} style={{ width: "80%" }}></div>
            <div className={c["sk-perc"]}>80%</div>
          </div>
        </div>
        <div className={c["skills-info"]}>
          <h5>GitHub</h5>
          <div className={c.progress}>
            <div className={c["progress-in"]} style={{ width: "90%" }}></div>
            <div className={c["sk-perc"]}>90%</div>
          </div>
        </div>
        <div className={c["skills-info"]}>
          <h5>MySql</h5>
          <div className={c.progress}>
            <div className={c["progress-in"]} style={{ width: "90%" }}></div>
            <div className={c["sk-perc"]}>90%</div>
          </div>
        </div>
        <div className={c["skills-info"]}>
          <h5>PHP</h5>
          <div className={c.progress}>
            <div className={c["progress-in"]} style={{ width: "80%" }}></div>
            <div className={c["sk-perc"]}>80%</div>
          </div>
        </div>
        <div className={c["skills-info"]}>
          <h5>Photoshop + Illustrator</h5>
          <div className={c.progress}>
            <div className={c["progress-in"]} style={{ width: "70%" }}></div>
            <div className={c["sk-perc"]}>70%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSkills;
