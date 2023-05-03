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
        loader: () =>
          fetch(
            "https://chef-recipe-hunter-server-kamrulislam2.vercel.app/allChefData"
          ),
      },
      {
        path: "/chef/:id",
        element: <SingleChefCard></SingleChefCard>,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-kamrulislam2.vercel.app/allChefData/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
