import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Film from "./components/Film";

const FilmPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [film, setFilm] = useState(null);
  const params = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${params.filmId}&plot=full&apikey=9a872763`
      );
      const data = await response.json();
      console.log(data);
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
      <Film film={film} />
    </>
  );
};

export default FilmPage;
