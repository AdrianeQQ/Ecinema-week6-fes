import React from "react";
import classes from "./Modal.module.css";
import { Link } from "react-router-dom";

const Modal = (props) => {
  return (
    <div
      className={`${classes.modal} ${
        props.isModalOpen ? classes["modal--open"] : ""
      }`}
    >
      <Link to="/" className={classes.modal__link}>
        Home
      </Link>
      <Link to="/findyourfilm" className={classes.modal__link}>
        Find Your Film
      </Link>
      <Link to="/" className={classes.modal__link}>
        Contact
      </Link>
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
