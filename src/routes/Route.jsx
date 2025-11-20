import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../users/Login";
import Register from "../users/Register";
import Contact from './../pages/Contact/Contact';
import About from "../pages/About US/About";

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
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/about",
          element: <About/>,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Route;
