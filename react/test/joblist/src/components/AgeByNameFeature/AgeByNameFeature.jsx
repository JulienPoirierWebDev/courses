import { useState } from "react";

const AgeByNameFeature = () => {
  const [name, setName] = useState("Bob");
  const [age, setAge] = useState(undefined);
  return (
    <div style={{ display: "flex" }}>
      <label htmlFor="name">Nom :</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        placeholder="Votre nom"
        onChange={async (event) => {
          setName(event.target.value);

          const response = await fetch(
            `https://api.agify.io/?name=${event.target.value}`
          );
          const data = await response.json();
          console.log(data);
          setAge(data.age);
        }}
      />

      {name !== "" && age ? (
        <>
          <p>Votre nom est {name}.</p> <p>Vous avez {age} ans</p>
        </>
      ) : null}
    </div>
  );
};

export default AgeByNameFeature;
