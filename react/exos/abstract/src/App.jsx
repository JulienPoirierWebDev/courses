import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CardList from "./components/CardsList/CardList";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Jokes from "./components/Jokes/Jokes";
import Account from "./components/Account/Account";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoListReducer from "./components/ToDoListReducer/ToDoListReducer";
import User from "./components/User/User";
import UserContext from "./context/UserContext";
import "./App.css";

function App() {
  const [isForm, setIsForm] = useState(true);
  const [userValue, setUserValue] = useState(null);
  const [page, setPage] = useState("search");

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);

      const data = await response.json();

      setUserValue(data[0]);
    }
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  const handleChange = (string) => {
    setPage(string);
  };

  return (
    <>
      <UserContext.Provider value={userValue}>
        <button
          onClick={() => {
            handleChange("search");
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            handleChange("todo");
          }}
        >
          ToDoList
        </button>
        <Header />
        {page === "search" ? <Search /> : null}
        <CardList />
        {page === "todo" ? <ToDoList /> : null}
        <Jokes />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
