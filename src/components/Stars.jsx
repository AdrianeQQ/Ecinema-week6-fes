import React from "react";
import classes from "./Stars.module.css";

const Stars = (props) => {
  const stars = Math.round(+props.rating) / 2;
  const starsElements = [];
  for (let i = 0; i < Math.floor(stars); i++) {
    starsElements.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`ionicon ${classes.film__star}`}
        viewBox="0 0 512 512"
        key={Math.random()}
      >
        <path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" />
      </svg>
    );
  }
  if (!Number.isInteger(stars)) {
    starsElements.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`ionicon ${classes.film__star}`}
        viewBox="0 0 512 512"
        key="half"
      >
        <path
          d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path d="M256 48v316L118 464l54-160-140-96h172l52-160z" />
      </svg>
    );
  }
  for (let i = starsElements.length; i < 5; i++) {
    starsElements.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`ionicon ${classes.film__star}`}
        viewBox="0 0 512 512"
        key={`empty-${i}`}
      >
        <path
          d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  }
  return starsElements;
};

export default Stars;
