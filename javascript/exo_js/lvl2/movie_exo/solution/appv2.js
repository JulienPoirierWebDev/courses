import { API_KEY } from "./secret.js";

async function handleSubmit(event) {
  event.preventDefault();

  setEmptyResults();
  showLoader();

  const title = document.querySelector("input").value;

  const isMovieChecked = document.querySelector("#movie").checked;
  setTimeout(async () => {
    isMovieChecked ? await getMovies(title) : await getSeries(title);
    hideLoader();

    addDetailsFunctionality();
  }, 1000);
}

function setEmptyResults() {
  const resultsHtml = document.querySelector("#results");
  resultsHtml.innerHTML = "";
}

function showLoader() {
  const loader = document.querySelector(".loader");
  loader.classList.toggle("hidden");
}

function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.classList.toggle("hidden");
}

function addDetailsFunctionality() {
  const details = document.querySelectorAll(".item_details");

  details.forEach((detail) => {
    detail.addEventListener("click", async () => {
      const [id, type] = getDataInfos(detail);
      const data = await getDetailsData(id, type);

      createDivDetailsElement(data);

      showDetails(data, ".fullScreenItem__container");
    });
  });
}

function showDetails(data, parentTargetSelector) {
  const html = createDivDetailsElement(data);
  const fullScreenItem = document.querySelector(parentTargetSelector);
  fullScreenItem.classList.toggle("hidden");

  fullScreenItem.innerHTML = html;
  const close = document.querySelector(".fullScreenItem__close");
  if (close) {
    close.addEventListener("click", () => {
      fullScreenItem.innerHTML = "";
      fullScreenItem.classList.toggle("hidden");
    });
  }
}

function getDataInfos(detailElement) {
  const id = detailElement.dataset.id;
  const type = detailElement.dataset.item;

  return [id, type];
}

async function getDetailsData(id, type) {
  const data =
    type === "tv" ? await getSeriesDetails(id) : await getMovieDetails(id);
  return data;
}

function createDivDetailsElement(item) {
  const {
    name,
    title,
    overview,
    poster_path,
    vote_average,
    vote_count,
    belongs_to_collection,
  } = item;

  const header = name ? name : title;

  const collection = belongs_to_collection
    ? `Collection : ${belongs_to_collection.name}`
    : "";

  console.log(belongs_to_collection);

  const html = `
  <div class="fullScreenItem__close">X</div>

          <div class="fullScreenItem__item">
              <div class="fullScreenItem__img">
                  <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${name}">
              </div>
              <div class="fullScreenItem__content">
                    <h2>${header}</h2>
                    <p>${overview}</p>
                    <p>${collection}</p>
                    <p>Note: ${vote_average} / 10 (${vote_count} votes)</p>
              </div>
          </div>
      `;

  return html;
}

async function getMovies(requestString) {
  const moviesData = await getElementsData(requestString, "movie");

  insertElementIntoHtml(moviesData, "results");
}

async function getSeries(requestString) {
  const seriesData = await getElementsData(requestString, "tv");

  insertElementIntoHtml(seriesData, "results");
}

async function getMovieDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const response = await fetch(url);

  const data = await response.json();
  return data;
}

async function getSeriesDetails(id) {
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;
  const response = await fetch(url);

  const data = await response.json();
  return data;
}

async function getElementsData(string, type) {
  const typeUrl = type === "movie" ? "movie" : "tv";
  const url = `https://api.themoviedb.org/3/search/${typeUrl}?api_key=${API_KEY}&query=${string}`;
  const response = await fetch(url);

  const { results } = await response.json();
  return results;
}

function insertElementIntoHtml(items, parentTargetId) {
  const resultsHtml = document.querySelector(`#${parentTargetId}`);

  let htmlToInsert = "";

  items.forEach((item) => {
    const newDiv = createDivElement(item);
    htmlToInsert += newDiv;
  });

  resultsHtml.innerHTML = htmlToInsert;
}

function createDivElement(item) {
  const { id, name, title, poster_path, overview } = item;

  const itemType = name ? "tv" : "movie";

  const image = poster_path
    ? `<img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${name}">`
    : "";

  const header = name ? name : title;
  return `
                      <div class="item">
                          <h2>${header}</h2>
                          ${image}
                          <p>${overview.substring(
                            0,
                            150
                          )}... - <span class="item_details" data-id=${id} data-item=${itemType}>En savoir plus</span></p>
                      </div>
                  `;
}

const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", handleSubmit);
