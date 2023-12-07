import { createBrowserRouter } from "react-router-dom";
import { Home, Catalog, Favorites, Error, Root } from "../screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
