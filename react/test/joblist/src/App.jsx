import JobOffersGroup from "./components/JobOffersGroup/JobOffersGroup";
import SearchMoviesFeature from "./components/SearchMoviesFeature/SearchMoviesFeature";
import AgeByNameFeature from "./components/AgeByNameFeature/AgeByNameFeature";

function App() {
  console.log("APP rerender");

  return (
    <>
      <JobOffersGroup />
      <AgeByNameFeature />
      <SearchMoviesFeature />
    </>
  );
}

export default App;
