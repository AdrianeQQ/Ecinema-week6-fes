import React from "react";
import classes from "./Others.module.css";
import Poster from "./Poster";

const Others = (props) => {
  const otherFilms = props.searchResult
    .filter((film) => film.Title !== props.title)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((film) => <Poster key={film.imdbID} film={film} isAlt={true} />);
  return otherFilms.length > 0 ? (
    <section className={classes.others__section}>
      <h3 className={classes.others__similar}>Other films</h3>
      <div className={classes["others__similar--container"]}>{otherFilms}</div>
    </section>
  ) : (
    <></>
  );
};

export default Others;
