import { useEffect, useState, useContext } from "react";
import UserContext from "../../context/UserContext";

const LangRadio = ({ value, country, onChange, lang }) => {
  return (
    <div>
      <input
        onChange={onChange}
        type="radio"
        id={value}
        name="lang"
        value={value}
        checked={value === lang ? true : false}
      />
      <label htmlFor={value}>{country}</label>
    </div>
  );
};

function Jokes() {
  const [joke, setJoke] = useState({});
  const [lang, setLang] = useState("cs");

  const userContext = useContext(UserContext);

  const languages = [
    {
      country: "France",
      value: "fr",
    },
    {
      country: "République Tchèque",
      value: "cs",
    },
    {
      country: "Allemagne",
      value: "de",
    },
    {
      country: "Angleterre",
      value: "en",
    },
    {
      country: "Espagne",
      value: "es",
    },
    {
      country: "Portugal",
      value: "pt",
    },
  ];

  async function getJokes() {
    const response = await fetch(
      `https://v2.jokeapi.dev/joke/Any?lang=${lang}`
    );

    const data = await response.json();

    const newJoke = {};

    if (data.type === "twopart") {
      newJoke.part1 = data.setup;

      newJoke.part2 = data.delivery;
    } else {
      newJoke.single = data.joke;
    }

    setJoke(newJoke);
  }

  useEffect(() => {
    getJokes();
  }, []);

  useEffect(() => {
    console.log(lang);
  }, [lang]);

  const handleRadioChange = (event) => {
    const newLang = event.target.value;
    setLang(newLang);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "var(--color2)",
        padding: "50px",
      }}
    >
      <h1>
        {userContext
          ? `${userContext?.name} va vous raconter une blague :)`
          : null}
      </h1>
      <div>
        <h3>Changer la langue</h3>
        <fieldset>
          <legend>Choisir une langue</legend>

          {languages.map((oneLanguage) => (
            <LangRadio
              key={oneLanguage.value}
              value={oneLanguage.value}
              country={oneLanguage.country}
              onChange={handleRadioChange}
              lang={lang}
            />
          ))}
        </fieldset>
      </div>

      <div>
        <button onClick={getJokes}>Charger une blague</button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "var(--color3)",
          color: "var(--color4)",
          borderRadius: "10px",
        }}
      >
        {joke.single ? (
          <p>{joke.single}</p>
        ) : (
          <>
            <p>{joke.part1}</p>

            <p>{joke.part2}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Jokes;
