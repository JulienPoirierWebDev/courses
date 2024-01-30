import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ToDoList from "../../components/ToDoList/ToDoList";
import NavBar from "../../components/NabBar/NavBar";

function ContactPage() {
  return (
    <>
      <NavBar />
      <Header />
      <ToDoList />
      <Footer />
    </>
  );
}

export default ContactPage;
