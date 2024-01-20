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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
          fetch(
            `https://lucky-auto-shope-backend-side.vercel.app/carDetail/${params.id}`
          ),
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
    element: <Dashboard />,
    children: [
      {
        path: "addcar",
        element: <AddCar />,
      },
      {
        path: "MyCollections",
        element: <MyCollections />,
      },
      {
        path: "updateCar/:id",
        element: <UpdateCar />,
        loader: ({ params }) =>
          fetch(
            `https://lucky-auto-shope-backend-side.vercel.app/updateCar/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
