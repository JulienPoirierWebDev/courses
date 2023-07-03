import { API_KEY } from "./secret.js";

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  const title = input.value;
  //input.value = "";

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

                <div class="item">
                    <h2>${title}</h2>
                    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
                    <p>${overview.substring(0, 150)}...</p>
                </div>
            `;
      });

      resultsHtml.innerHTML = htmlToInsert;
    });
}

async function getSeries(requestString) {
  const seriesData = await getSeriesData(requestString);

  insertSeriesIntoHtml(seriesData, "results");
}

async function getSeriesData(serie) {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${serie}`;
  const response = await fetch(url);

  const { results } = await response.json();
  return results;
}

function insertSeriesIntoHtml(series, parentTargetId) {
  const resultsHtml = document.querySelector(`#${parentTargetId}`);

  let htmlToInsert = "";

  series.forEach((serie) => {
    const newDiv = createDivMovie(serie);
    htmlToInsert += newDiv;
  });

  resultsHtml.innerHTML = htmlToInsert;
}

function createDivMovie(serie) {
  const { name, poster_path, overview } = serie;
  return `
                      <div class="movie">
                          <h2>${name}</h2>
                          <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${name}">
                          <p>${overview}</p>
                      </div>
                  `;
}

const searchForm = document.querySelector("#searchForm");
console.log(searchForm);
searchForm.addEventListener("submit", handleSubmit);
