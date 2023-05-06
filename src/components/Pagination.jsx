import React from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  const changePage = (increment) => {
    if (increment) {
      if (props.currentPage < props.pages) {
        props.search(
          null,
          props.searchedPhrase,
          props.selectedYear,
          props.currentPage + 1
        );
        props.setCurrentPage((prev) => prev + 1);
      }
    } else {
      if (props.currentPage !== 1) {
        props.search(
          null,
          props.searchedPhrase,
          props.selectedYear,
          props.currentPage - 1
        );
        props.setCurrentPage((prev) => prev - 1);
      }
    }
  };
  return (
    <div className={classes["results__pages--container"]}>
      <button
        className={classes["results__page--btn"]}
        onClick={() => changePage(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`ionicon ${classes["results__pages--svg"]}`}
          viewBox="0 0 512 512"
        >
          <path
            d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M296 352l-96-96 96-96"
          />
        </svg>
      </button>
      <p className={classes.results__page}>
        {props.currentPage} / {props.pages}
      </p>
      <button
        className={classes["results__page--btn"]}
        onClick={() => changePage(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={`ionicon ${classes["results__pages--svg"]}`}
          viewBox="0 0 512 512"
        >
          <path
            d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M216 352l96-96-96-96"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
