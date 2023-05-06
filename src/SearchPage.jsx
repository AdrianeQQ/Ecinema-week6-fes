import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Modal from "./components/Modal";

const SearchPage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const resetFilters = () => {
    setSelectedYear(null);
    props.setHasError(false);
    props.setSearchBarContent("Search for a film");
    setSearchValue("");
  };
  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <main>
        <Search
          selectedYear={selectedYear}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          search={props.search}
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
        />
        <Results
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          searchBarContent={props.searchBarContent}
          isLoading={props.isLoading}
          hasError={props.hasError}
          resetFilters={resetFilters}
          searchResult={props.searchResult}
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
          pages={props.pages}
          search={props.search}
          searchValue={searchValue}
          searchedPhrase={props.searchedPhrase}
        />
      </main>
    </>
  );
};

export default SearchPage;
