import React, { useRef, useEffect } from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const previousSearchValue = useRef("");
  const { searchValue } = props;
  useEffect(() => {
    previousSearchValue.current = searchValue;
  }, [searchValue]);
  return (
    <section className={classes.section__search}>
      <h1 className={classes.search__heading}>Browse our films</h1>
      <form
        className={classes.search__form}
        onSubmit={(event) => {
          props.search(event, props.searchValue, props.selectedYear, 1);
          props.setCurrentPage(1);
        }}
      >
        <input
          type="text"
          placeholder="Search by Title"
          className={classes.search__input}
          value={props.searchValue}
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
        <div className={classes["search__svg--container"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 ${classes.search__svg}`}
            onClick={() => {
              props.search(null, props.searchValue, props.selectedYear, 1);
              props.setCurrentPage(1);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </form>
    </section>
  );
};

export default Search;
