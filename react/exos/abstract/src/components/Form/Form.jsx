import { useEffect, useState, useRef } from "react";
import UserInfo from "./UserInfo";

function Form() {
  const [name, setName] = useState(null);
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(null);
  const [isForm, setIsForm] = useState(true);
  const refEmailInput = useRef(null);

  useEffect(() => {
    console.log("Le composant est chargé");
    return () => {
      console.log("Je suis démonté");
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setAge(data.age);
    }

    console.log(refEmailInput.current.value);

    fetchData();
  }, [name]);

  return (
    <div style={{ width: "100%", margin: "20px" }}>
      <button
        onClick={() => {
          setIsForm(!isForm);
        }}
      >
        Enlever le formulaire
      </button>

      {isForm === true ? (
        <>
          {" "}
          <form action="">
            <div style={{ margin: "auto", width: "50%" }}>
              <label htmlFor="name">Votre nom</label>
              <input
                onChange={(event) => {
                  const newName = event.target.value;
                  setName(newName);
                  setCount(count + 1);
                }}
                type="text"
                name="name"
                id="name"
              />

              <label htmlFor="email"></label>
              <input
                ref={refEmailInput}
                type="text"
                placeholder="email"
                name="email"
                id="email"
              />
            </div>
          </form>
          <UserInfo
            age={age}
            count={count}
            email={refEmailInput.current ? refEmailInput.current.value : null}
          />
        </>
      ) : (
        <>Le formulaire est caché</>
      )}
    </div>
  );
}

export default Form;
