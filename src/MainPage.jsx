import React, { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Landing from "./components/Landing";

const MainPage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Header
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isAlt={true}
      />
      <Landing
        search={props.search}
        isLoading={props.isLoading}
        setIsLoading={props.setIsLoading}
      />
    </>
  );
};

export default MainPage;
