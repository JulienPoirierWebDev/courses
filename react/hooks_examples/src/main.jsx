import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import UseMemoPage from "./pages/UseMemoPage.jsx";
import UseCallbackPage from "./pages/UseCallbackPage.jsx";

const ErrorPage = () => {
  const error = useRouteError();
  return <div>Error: {error.status}</div>;
};

const ErrorElementPage = () => {
  const error = useRouteError();
  return <div>ErrorPage: {error.status}</div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello router</div>,
    errorElement: <ErrorPage />,
  },
  { path: "/useMemo", element: <UseMemoPage /> },
  { path: "/useCallback", element: <UseCallbackPage /> },
  {
    path: "element/:id",
    element: <div>Element</div>,
    errorElement: <ErrorElementPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
