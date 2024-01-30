import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { CircularProgress } from "@mui/material";

function TestUseEffect() {
  const [total, setTotal] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      console.log(data.length);
      setTotal(data.length);
    };

    getData();
    console.log(total);

    const myCallbackEvent = (e) => {
      console.log("Je suis appelé par l'évènement");
    };

    document.addEventListener("click", myCallbackEvent);

    return () => {
      console.log("Goobye world");
      document.removeEventListener("click", myCallbackEvent);
    };
  }, []);

  return (
    <>
      <p>{"Je suis un test!"}</p>
      <p>Total : {total}</p>
    </>
  );
}

function User() {
  const [isVisible, setIsVisible] = useState(true);

  const userContext = useContext(UserContext);
  return (
    <div>
      {userContext?.username ? (
        `Hello ${userContext.username}`
      ) : (
        <CircularProgress color="secondary" />
      )}

      <p
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Click moi
      </p>

      {isVisible ? <TestUseEffect /> : null}
    </div>
  );
}

export default User;
