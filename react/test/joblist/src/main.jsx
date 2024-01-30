import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchMoviesFeature from "./components/SearchMoviesFeature/SearchMoviesFeature.jsx";
import AgeByNameFeature from "./components/AgeByNameFeature/AgeByNameFeature.jsx";
import JobOffersGroup from "./components/JobOffersGroup/JobOffersGroup.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Something from "./components/Something/Something.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <>Hello world</>,
    errorElement: <>Erreur</>,
  },
  {
    path: "/movieSearch",
    element: <SearchMoviesFeature />,
  },
  {
    path: "/age",
    element: <AgeByNameFeature />,
  },
  {
    path: "/joblist",
    element: <JobOffersGroup />,
  },
  {
    path: "/withNavbar/",
    element: <Navigation />,
    children: [
      {
        path: "movieSearch",
        element: <SearchMoviesFeature />,
      },
      {
        path: "age",
        element: <AgeByNameFeature />,
      },
      {
        path: "joblist",
        element: <JobOffersGroup />,
      },
    ],
  },
  {
    path: "/withParams/:infos/name/:name?",
    element: <Something />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
