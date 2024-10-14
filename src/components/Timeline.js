import loop from "../assets/loop.mp4";
import c from "./Timeline.module.css";
import TimeLineItem from "./timeLine/TimeLineItem";

const EDUCATION = [
  {
    key: 1,
    date: "2019/2020",
    degree: "Bachelor, Software Engineering",
    univ: "Faculty of Science and Technology--Moulay Ismail University - Errachidia , Morocco",
  },
  {
    key: 2,
    date: "2016/2018",
    degree:
      "BTEC Higher National Diploma, Computer science - Multimedia & Web Design",
    univ: "Class Preparing Student For University - Errachidia, Morocco",
  },
  {
    key: 3,
    date: "2016",
    degree: "Baccalaureate in Electrical Science and Technology",
    univ: "Qualifying Technical High School - Errachidia, Morocco",
  },
];
const EXPERIENCE = [
  {
    key: 710,
    date: "From 02/2024 until now",
    degree: "Full-Time - FullStack Web Devloper",
    univ: "APTIV - Meknes , Morocco",
  },
  {
    key: 780,
    date: "From 10/2023 until 02/2024",
    degree: "Internship - FullStack Web Devloper",
    univ: "APTIV - Meknes , Morocco",
  },
  {
    key: 78,
    date: "From 03/2022 until 08/2023",
    degree: "Freelance - FullStack Web & Mobile Devloper",
    univ: "Errachidia , Morocco",
  },
  {
    key: 200,
    date: "From 09/2020 to 01/2022",
    degree:
      "Internship - Developing an eLearning web application with integrated database",
    univ: "Faculty of Science and Technology--Moulay Ismail University - Errachidia , Morocco",
  },
  {
    key: 390,
    date: "From 06/2017 to 08/2017",
    degree: "Infography",
    univ: "Streemarcom - Rabat, Morocco",
  },
];
const Timeline = (p) => {
  return (
    <main className={c.mainContainer}>
      <video className={c.videoBg} autoPlay loop playsInline muted>
        <source src={loop} type="video/mp4" />
      </video>
      <div className={c.wrapper}>
        <div className={c.rows}>
          <div className={`${c.education} ${c.pdd}`}>
            <h3 className={c.titre}>Experience</h3>

            <div className={c["tm-box"]}>
              <div className={c.timeline}>
                {EXPERIENCE.map((item) => {
                  return (
                    <TimeLineItem
                      key={item.key}
                      id={item.key}
                      date={item.date}
                      degree={item.degree}
                      univ={item.univ}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`${c.education} ${c.pdd} ${c.firstChild}`}>
            <h3 className={c.titre}>Education</h3>

            <div className={c["tm-box"]}>
              <div className={c.timeline}>
                {EDUCATION.map((item) => {
                  return (
                    <TimeLineItem
                      key={item.key}
                      id={item.key}
                      date={item.date}
                      degree={item.degree}
                      univ={item.univ}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Timeline;
