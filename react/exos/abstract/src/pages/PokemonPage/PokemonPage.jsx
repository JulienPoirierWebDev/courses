import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useFetchPokemon from "../../hooks/useFetchPokemon";
import NavBar from "../../components/NabBar/NavBar";

function PokemonPage() {
  const loaderData = useLoaderData();
  const pokemons = loaderData?.pokemons;

  const params = useParams();
  const id = params?.id;

  const [onePokemon, error, loading] = useFetchPokemon(id);

  return (
    <>
      <NavBar />
      <h1>POKEMON</h1>
      {pokemons ? (
        <>
          <h2>{"J'ai plusieurs pokemons"}</h2>
          {pokemons.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <div style={{ border: "5px solid black" }} key={pokemon.id}>
                  <h2>{pokemon.name}</h2>

                  <ul>
                    {pokemon.moves.map((move) => {
                      return <li key={move.move.name}>{move.move.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </>
      ) : null}

      {onePokemon ? <>{onePokemon.name}</> : null}
      {error ? <h2>{error}</h2> : null}
      {loading ? <p>Loading ...</p> : null}
    </>
  );
}

export default PokemonPage;
