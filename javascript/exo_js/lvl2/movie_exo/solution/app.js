console.log("Hello from app.js!");

import { API_KEY } from "./secret.js";

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  const title = input.value;
  input.value = "";

  // if radio movie is checked
  if (document.querySelector("#movie").checked) {
    getMovies(title);
  } else if (document.querySelector("#series").checked) {
    getSeries(title);
  }
}

function getMovies(movie) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;
      const resultsHtml = document.querySelector("#results");

      let htmlToInsert = "";
      results.forEach((movie) => {
        const { title, poster_path, overview } = movie;
        htmlToInsert += `

                <div class="movie">
                    <h2>${title}</h2>
                    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
                    <p>${overview}</p>
                </div>
            `;
      });

      resultsHtml.innerHTML = htmlToInsert;
    });
}

function getSeries(serie) {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${serie}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;
      const resultsHtml = document.querySelector("#results");

      let htmlToInsert = "";
      results.forEach((serie) => {
        const { name, poster_path, overview } = serie;
        htmlToInsert += `
                    <div class="movie">
                        <h2>${name}</h2>
                        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${name}">
                        <p>${overview}</p>
                    </div>
                `;
      });

      resultsHtml.innerHTML = htmlToInsert;
    });
}

const searchForm = document.querySelector("#searchForm");
console.log(searchForm);
searchForm.addEventListener("submit", handleSubmit);
