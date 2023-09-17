<<<<<<< HEAD
=======


>>>>>>> 317caa6 (first commit)
import c from "./BackDrop.module.css";

const BackDrop = p => {

    const onClickHandler = e => {
        p.click();
    }

    return <div className={c.backdrop} onClick={onClickHandler} ></div>
}
export default BackDrop