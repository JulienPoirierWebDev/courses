import { useEffect, useState } from "react";

const useFetchPokemon = (id) => {
  const [onePokemon, setOnePokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let data = await response.json();
        setOnePokemon(data);
        setLoading(false);
      } catch (error) {
        setError(`Le pokemon avec l'ID ${id} n'existe pas`);
        setLoading(false);
      }
    }
    if (id) {
      setLoading(true);
      fetchData();
    }
  }, []);

  return [onePokemon, error, loading];
};

export default useFetchPokemon;
