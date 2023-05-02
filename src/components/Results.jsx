import React from "react";
import classes from "./Results.module.css";
import Spinner from "./Spinner";
import Error from "./Error";
import Poster from "./Poster";

const Results = (props) => {
  const selectYear = (event) => {
    const sliderX = event.target.getBoundingClientRect().x;
    const distance = (event.clientX - sliderX) / 350;
    props.setSelectedYear(1949 + Math.ceil(74 * distance));
  };
  return (
    <section className={classes.section__results}>
      <div className={classes["results__header--container"]}>
        <h2 className={classes.results__heading}>{props.searchBarContent}</h2>
        <div className={classes["results__filter--container"]}>
          <div className={classes["results__filter--parking"]}>
            {props.selectedYear ? (
              <button
                className={classes["results__filter--btn"]}
                onClick={() => props.setSelectedYear(null)}
              >
                Deselect
              </button>
            ) : null}
          </div>
          <h3 className={classes["results__filter--year"]}>
            Year selected:{" "}
            <span>{props.selectedYear ? props.selectedYear : "None"}</span>
          </h3>
          <div
            className={classes["results__filter--slider"]}
            onClick={(event) => selectYear(event)}
          ></div>
        </div>
      </div>
      <div className={classes.results__list}>
        {props.isLoading ? <Spinner /> : null}
        {props.hasError ? <Error resetFilters={props.resetFilters} /> : null}
        {props.searchResult.length > 0
          ? props.searchResult.map((film) => <Poster film={film} />)
          : null}
      </div>
    </section>
  );
};

export default Results;
