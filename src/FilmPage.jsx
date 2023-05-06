import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Film from "./components/Film";
import Spinner from "./components/Spinner";
import Others from "./components/Others";
import Error from "./components/Error";

const FilmPage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const params = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${params.filmId}&plot=full&apikey=9a872763`
      );
      const data = await response.json();
      setIsLoading(false);
      if (data.Error) {
        setHasError(true);
        return;
      }
      setFilm(data);
    })();
  }, [params.filmId]);
  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Header
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isAlt={true}
      />
      <main style={{ display: "flex", flexDirection: "column" }}>
        {isLoading && <Spinner />}
        {hasError && <Error isAlt={true} />}
        {!isLoading && !hasError && <Film film={film} />}
        {!isLoading && !hasError && (
          <Others searchResult={props.searchResult} title={film.Title} />
        )}
      </main>
    </>
  );
};

export default FilmPage;
