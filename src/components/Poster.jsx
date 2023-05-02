import React from "react";
import classes from "./Poster.module.css";

const Poster = ({ film }) => {
  return (
    <a href={`/${film.imdbID}`} className={classes.results__film}>
      <div className={classes["results__poster--container"]}>
        {film.Poster !== "N/A" ? (
          <img
            src={film.Poster}
            alt={`${film.Title} Poster`}
            className={classes.results__poster}
          />
        ) : (
          <div
            class={`${classes.results__poster} ${classes["results__image--error"]}`}
          >
            No poster
          </div>
        )}
        <div
          className={`${classes.results__type} ${
            film.Type === "movie"
              ? classes.results__movie
              : classes.results__series
          }`}
        >
          {film.Type}
        </div>
      </div>
      <h3 className={classes.results__title}>{film.Title}</h3>
      <div className={classes.results__detail}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 ${classes.results__svg}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
        <span>{film.Year}</span>
      </div>
    </a>
  );
};

export default Poster;