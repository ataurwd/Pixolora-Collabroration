import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Route;
