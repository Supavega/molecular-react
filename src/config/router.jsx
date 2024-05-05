import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";
import Error from "../screens/error";
import Dashboard from "../screens/dashboard";
import ProtectedRoute from "../components/protectedRoute";

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
  {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
