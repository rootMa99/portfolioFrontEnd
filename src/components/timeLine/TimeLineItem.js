import c from "./TimeLineItem.module.css";

const TimeLineItem = (p) => {
  return (
    <div className={c["tm-item"]} key={p.id}>
      <div className={c.circle}></div>
      <h6 className={c["time-date"]}>
        <i className="fa fa-calendar"></i> {p.date}
      </h6>
      <h4 className={c["tm-titre"]}>{p.degree}</h4>
      <p className={c["tm-titre"]}>{p.univ}</p>
    </div>
  );
};

export default TimeLineItem;
