import HomePage from "../pages/HomePage/HomePage.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";
import PokemonPage from "../pages/PokemonPage/PokemonPage.jsx";
import NavBar from "../components/NabBar/NavBar.jsx";

import { createBrowserRouter } from "react-router-dom";
import TaskGroupPage from "../pages/TaskGroupPage/TaskGroupPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>ERREUR !!!</div>,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/starter-pokemon-gen1",
    element: <PokemonPage />,
    loader: async () => {
      const pokemonsArray = [];

      let response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      let data = await response.json();
      pokemonsArray.push(data);

      response = await fetch("https://pokeapi.co/api/v2/pokemon/4");
      data = await response.json();
      pokemonsArray.push(data);

      response = await fetch("https://pokeapi.co/api/v2/pokemon/7");
      data = await response.json();
      pokemonsArray.push(data);

      return {
        pokemons: pokemonsArray,
      };
    },
  },
  {
    path: "/starter-pokemon-gen2",
    element: <PokemonPage />,
    loader: async () => {
      const pokemonsArray = [];

      let response = await fetch("https://pokeapi.co/api/v2/pokemon/152");
      let data = await response.json();
      pokemonsArray.push(data);

      response = await fetch("https://pokeapi.co/api/v2/pokemon/155");
      data = await response.json();
      pokemonsArray.push(data);

      response = await fetch("https://pokeapi.co/api/v2/pokemon/158");
      data = await response.json();
      pokemonsArray.push(data);

      return {
        pokemons: pokemonsArray,
      };
    },
  },
  {
    path: "/pokemon/:id",
    element: <PokemonPage />,
    errorElement: <div>Custom Error</div>,
  },
  {
    path: "/tasks",
    element: <TaskGroupPage />,
  },
]);

export default router;
