
import { Fragment } from "react";
import c from "./AboutMe.module.css";

const AboutMeInfo = p => {
    return (
      <Fragment>
        <div className={`${c["personal-info"]} ${c.pdd}`}>
          <div className={c.row}>
            <div className={`${c.info} ${c.pdd}`}>
              <p>
                Birthday : <span>10/10/1996</span>
              </p>
            </div>

            <div className={`${c.info} ${c.pdd}`}>
              <p>
                Degree : <span>Bachelor (Software Engineering)</span>
              </p>
            </div>
            <div className={`${c.info} ${c.pdd}`}>
              <p>
                Phone : <span>+212-639636434</span>
              </p>
            </div>
            <div className={`${c.info} ${c.pdd}`}>
              <p>
                City : <span>Errachidia</span>
              </p>
            </div>
            <div className={`${c.info} ${c.pdd}`}>
              <p>
                Freelance : <span>Available</span>
              </p>
            </div>
            <div className={`${c.info} ${c.pdd}`}>
              <p>
                Email :
                <span>anasszeroual09@gmail.com / 9marsans9@gmail.com / anass.zeroual@azlog.dev</span>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default AboutMeInfo;