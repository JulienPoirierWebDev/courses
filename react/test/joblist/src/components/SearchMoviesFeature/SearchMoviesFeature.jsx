import { useEffect, useState } from "react";

const MovieCard = ({ oneMovie, setSelectedMovieId }) => {
  console.log("MOVIE RERENDER", Date.now());
  return (
    <div
      key={oneMovie.id}
      style={{
        border: "2px solid black",
        maxWidth: "90vw",
        padding: "30px",
        margin: "30px",
      }}
    >
      <p>Titre du film : {oneMovie.title}</p>
      <p>{oneMovie.overview}</p>
      <p>{oneMovie.vote_average}</p>
      <img
        style={{ width: "100%" }}
        src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
        alt={`Affiche du film ${oneMovie.title}`}
      />
      <button
        onClick={() => {
          setSelectedMovieId(oneMovie.id);
        }}
      >
        En savoir plus
      </button>
    </div>
  );
};

const SearchMoviesFeature = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(undefined);
  const [infosOfOneMovie, setInfosOfOneMovie] = useState(undefined);

  const handleSubmitMovieSearch = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://movies-api.julienpoirier-webdev.com/search/movies/${searchInput}`
    );

    const data = await response.json();

    setMovies(data.results);
  };

  const handleChangeInputMovie = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://movies-api.julienpoirier-webdev.com/infos/movies/${selectedMovieId}`
      );

      const data = await response.json();

      setInfosOfOneMovie(data);
    };

    if (selectedMovieId) {
      fetchData();
    }

    console.log("Use effect", selectedMovieId);
  }, [selectedMovieId]);

  return (
    <>
      <div>
        <form action="">
          <label htmlFor="movieSearch"></label>
          <input
            id="movieSearch"
            type="text"
            onChange={handleChangeInputMovie}
          />

          <input
            type="submit"
            value="Rechercher des films"
            onClick={handleSubmitMovieSearch}
          />
        </form>
      </div>

      {movies.length > 1 && !selectedMovieId
        ? movies.map((oneMovie) => (
            <MovieCard
              key={oneMovie.id}
              oneMovie={oneMovie}
              setSelectedMovieId={setSelectedMovieId}
            />
          ))
        : null}

      {typeof infosOfOneMovie !== "undefined" ? (
        <div>
          <p>Budget : {infosOfOneMovie.budget} $</p>
          <p>Durée du film en minutes : {infosOfOneMovie.runtime}</p>
          <button
            onClick={() => {
              setSelectedMovieId(null);
            }}
          >
            Revenir en arrière
          </button>
        </div>
      ) : null}
    </>
  );
};

export default SearchMoviesFeature;
