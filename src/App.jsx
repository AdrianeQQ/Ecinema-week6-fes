import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [searchBarContent, setSearchBarContent] = useState("Search for a film");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const resetFilters = () => {
    setSelectedYear(null);
    setHasError(false);
    setSearchBarContent("Search for a film");
    setSearchValue("");
  };
  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <main>
        <Search
          setSearchBarContent={setSearchBarContent}
          selectedYear={selectedYear}
          setIsLoading={setIsLoading}
          setHasError={setHasError}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSearchResult={setSearchResult}
        />
        <Results
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          searchBarContent={searchBarContent}
          isLoading={isLoading}
          hasError={hasError}
          resetFilters={resetFilters}
          searchResult={searchResult}
        />
      </main>
    </>
  );
};

export default App;
