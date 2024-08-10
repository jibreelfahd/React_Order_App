import ReactDOM from "react-dom";

import styles from "./Overlay.module.css";

const Overlay = (props) => {
  const classes = `${styles.overlay} ${props.className}`;
  return (
    <div className={classes} onClick={props.onClicks}>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay onClicks={props.onClick}>{props.children}</Overlay>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
