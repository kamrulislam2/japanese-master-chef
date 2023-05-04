import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SingleChefCard from "../components/ChefCard/SingleChefCard";
import Banner from "../layouts/BannerForHome/BannerForHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: <SingleChefCard></SingleChefCard>,
      },
    ],
  },
]);

export default router;
