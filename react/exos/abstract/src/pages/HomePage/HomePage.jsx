import React from "react";
import Header from "../../components/Header/Header";
import Jokes from "../../components/Jokes/Jokes";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";
import NavBar from "../../components/NabBar/NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      <Jokes />
      <Footer />
    </>
  );
}

export default HomePage;
