import { Fragment, useState } from "react";
import BackDrop from "./BackDrop";
import List from "./List";
import c from "./NavBarMenu.module.css";
const NavBarMenu = (p) => {
  const [close, setClose] = useState(false);

  const onCloseHandler = (show) => {
    setClose(show);
  };

  const onClickHandler = (e) => {
    setClose(!close);
  };

  return (
    <Fragment>
      <div
        className={`${c.container} ${!close ? "" : c.change}`}
        onClick={onClickHandler}
      >
        <div className={c.bar1}></div>
        <div className={c.bar2}></div>
        <div className={c.bar3}></div>
      </div>
      {close && <BackDrop />}
      {close && <List onClose={onCloseHandler} />}
    </Fragment>
  );
};
export default NavBarMenu;
