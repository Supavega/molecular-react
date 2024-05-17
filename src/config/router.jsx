import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";
import Error from "../screens/error";
import Dashboard from "../screens/dashboard";
import Edition from "../screens/edition";
import Workspace from "../screens/workspace";
import ProtectedRoute from "../components/protectedRoute";
import Test from "../screens/test";

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
  },
  {
    path: "/edition/:id",
    element: <ProtectedRoute><Edition /></ProtectedRoute>
  },
  {
    path: "/workspace/:id",
    element: <ProtectedRoute><Workspace/></ProtectedRoute>
  }

]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
