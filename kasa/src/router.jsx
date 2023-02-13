import { createBrowserRouter } from "react-router-dom";
import Homepage from "../src/pages/homepage/homepage";
import About from "../src/pages/about/about";
import HouseDescription from "../src/pages/houseDescription/houseDescription";
import NotFound from "../src/pages/notFound/notFound";
import Layout from "../src/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/accomodation/:id",
        element: <HouseDescription />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
