import React, { useRef, useEffect, useState } from "react";
import classes from "./Landing.module.css";
import Spinner from "./Spinner";

const Landing = (props) => {
  const previousSearchValue = useRef("");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    previousSearchValue.current = searchValue;
  }, [searchValue]);
  return (
    <section className={classes.landing__section}>
      <h1 className={classes.landing__heading}>
        Europe's most awarded film finder platform
      </h1>
      <h2 className={classes.landing__head}>
        Find your dream film with <span>ECinema</span>
      </h2>
      <form
        className={classes.landing__form}
        onSubmit={(event) => props.search(event, searchValue)}
      >
        <input
          type="text"
          className={classes.landing__input}
          placeholder="Search by Title"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          className={classes.landing__btn}
          onClick={() => props.search(null, searchValue)}
        >
          {props.isLoading ? (
            <Spinner isAlt={true} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ${classes.landing__svg}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          )}
        </button>
      </form>
      <img
        src={require("../img/cinema-logo.png")}
        alt="Cinema"
        className={classes.landing__img}
      />
    </section>
  );
};

export default Landing;
