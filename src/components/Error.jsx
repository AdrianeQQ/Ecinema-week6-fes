import React from "react";
import classes from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={classes.results__error}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        class={`w-6 h-6 ${classes["results__error--svg"]}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <h3 className={classes["results__error-title"]}>
        Could not find any matches related to your search.
      </h3>
      <p className={classes["results__error--p"]}>
        Please change the filter or reset it below.
      </p>
      <button
        className={classes["results__error--btn"]}
        onClick={props.resetFilters}
      >
        Reset filter
      </button>
    </div>
  );
};

export default Error;
