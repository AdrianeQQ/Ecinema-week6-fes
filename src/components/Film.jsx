import React from "react";
import classes from "./Film.module.css";
import Stars from "./Stars";

const Film = ({ film }) => {
  return (
    <section className={classes.film__section}>
      <div className={classes.film__container}>
        <div className={classes["film__img--holder"]}>
          {film.Poster !== "N/A" ? (
            <img src={film.Poster} alt="Film" className={classes.film__img} />
          ) : (
            <div className={classes["film__poster--error"]}>No poster</div>
          )}
        </div>
        <div className={classes["film__details--container"]}>
          <h2 className={classes.film__title}>{film.Title}</h2>
          <div className={classes["film__header--container"]}>
            <div>
              <p className={classes.film__director}>{film.Director}</p>
              <div className={classes["film__genre--container"]}>
                {[...film.Genre.split(", ")].map((el, i) => (
                  <p className={classes.film__genre} key={i}>
                    {el}
                  </p>
                ))}
              </div>
              <div className={classes["film__info--container"]}>
                <p className={classes.film__year}>{film.Year}</p>
                <p className={classes.film__runtime}>{film.Runtime}</p>
              </div>
            </div>
            <div className={classes["film__reviews--container"]}>
              <div className={classes["film__stars--container"]}>
                <Stars rating={film.imdbRating} />
              </div>
              <p className={classes.film__rating}>
                {film.imdbRating}
                <span>/10</span>
              </p>
              <p className={classes["film__rating--amount"]}>
                {film.imdbVotes} ratings
              </p>
            </div>
          </div>
          <h3 className={classes["film__actors--holder"]}>Stars</h3>
          <div className={classes["film__actors--container"]}>
            {[...film.Actors.split(", ")].map((el, i) => (
              <p className={classes.film__actor} key={i}>
                {el}
              </p>
            ))}
          </div>
          <h3 className={classes["film__description--holder"]}>Summary</h3>
          <p className={classes.film__description}>{film.Plot}</p>
        </div>
      </div>
    </section>
  );
};

export default Film;
