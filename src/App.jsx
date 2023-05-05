import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import FilmPage from "./FilmPage";

const App = () => {
  const [searchBarContent, setSearchBarContent] = useState("Search for a film");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();
  const search = async (event, titleSearch, selectedYear) => {
    if (event) event.preventDefault();
    setSearchResult([]);
    setHasError(false);
    setSearchBarContent(
      <>
        Search results for: <span>"{titleSearch}"</span>{" "}
        {selectedYear ? (
          <>
            in <span>"{selectedYear}"</span>
          </>
        ) : (
          ""
        )}
      </>
    );
    setIsLoading(true);
    const response = await fetch(
      `http://www.omdbapi.com/?${titleSearch ? `s=${titleSearch}` : "s="}${
        selectedYear ? `&y=${selectedYear}` : ""
      }&apikey=9a872763`
    );
    const data = await response.json();
    setIsLoading(false);
    if (data.Error) {
      setHasError(true);
      return;
    }
    // console.log(data.Search.slice(0, 6));
    setSearchResult(data.Search.slice(0, 6));
    navigate("/findyourfilm");
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            search={search}
          />
        }
      />
      <Route
        path="/findyourfilm"
        element={
          <SearchPage
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            searchResult={searchResult}
            search={search}
            hasError={hasError}
            searchBarContent={searchBarContent}
          />
        }
      />
      <Route path="/film/:filmId" element={<FilmPage />} />
    </Routes>
  );
};

export default App;
