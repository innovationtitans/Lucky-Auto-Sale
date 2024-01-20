import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Aboutus from "../Pages/Aboutus";
import Dashboard from "../Layout/Dashboard";
import AddCar from "../ActionComponents/AddCar";
import CarDetail from "../Pages/CarDetail";
import Inventory from "../Pages/Inventory";
import MyCollections from "../ActionComponents/MyCollections";
import UpdateCar from "../ActionComponents/UpdateCar";
import Login from "../Security/Login";
import Signup from "../Security/Singup";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <Aboutus />,
      },
      {
        path: "/carDetail/:id",
        element: <CarDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/carDetail/${params.id}`),
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "addcar",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "MyCollections",
        element: (
          <PrivateRoute>
            <MyCollections />
          </PrivateRoute>
        ),
      },
      {
        path: "updateCar/:id",
        element: (
          <PrivateRoute>
            <UpdateCar />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateCar/${params.id}`),
      },
    ],
  },
]);

export default router;
