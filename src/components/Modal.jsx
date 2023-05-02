import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div
      className={`${classes.modal} ${
        props.isModalOpen ? classes["modal--open"] : ""
      }`}
    >
      <a href="/" className={classes.modal__link}>
        Home
      </a>
      <a href="/" className={classes.modal__link}>
        Find Your Film
      </a>
      <a href="/" className={classes.modal__link}>
        Contact
      </a>
      <div
        className={classes.exit__icon}
        onClick={() => props.setIsModalOpen(false)}
      >
        <div className={classes["exit__icon--container"]}>
          <div
            className={`${classes["exit--dash"]} ${classes["dash--1"]}`}
          ></div>
          <div
            className={`${classes["exit--dash"]} ${classes["dash--2"]}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
