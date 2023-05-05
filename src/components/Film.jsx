import React from "react";
import classes from "./Film.module.css";

const Film = ({ film }) => {
  return (
    <section className={classes.film__section}>
      <div className={classes.film__container}>
        <div className={classes["film__img--holder"]}>
          <img src={film.Poster} alt="Film" className={classes.film__img} />
        </div>
        <div className={classes["film__details--container"]}>
          <h2 className={classes.film__title}>{film.Title}</h2>
          <p className={classes.film__director}>{film.Director}</p>
          <div className={classes["film__genre--container"]}>
            <p className={classes.film__genre}>{film.Genre}</p>
          </div>
          <div className={classes["film__header--container"]}>
            <div className={classes["film__info--container"]}>
              <p className={classes.film__year}>{film.Year}</p>
              <p className={classes.film__runtime}>{film.Runtime}</p>
            </div>
            <div className={classes["film__reviews--container"]}>
              <p className={classes.film__rating}>{film.imdbRating}/10</p>
              <p className={classes["film__rating--amount"]}>
                {film.imdbVotes}
              </p>
            </div>
          </div>
          <h3 className={classes["film__description--holder"]}>Summary</h3>
          <p className={classes.film__description}>{film.Plot}</p>
          <div className={classes["film__actors--container"]}>
            <p className={classes.film__actors}>{film.Actors}</p>
          </div>
        </div>
      </div>
      <h3 className={classes.film__similar}>Similar films</h3>
      <div className={classes["film__similar--container"]}>
        <p>FILMS SOON!</p>
      </div>
    </section>
  );
};

export default Film;
