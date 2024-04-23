import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";
import Error from "../screens/error";

const router = createBrowserRouter([
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
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
