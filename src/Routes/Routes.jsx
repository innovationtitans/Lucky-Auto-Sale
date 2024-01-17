import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Aboutus from "../Pages/Aboutus";
import Dashboard from "../Layout/Dashboard";
import AddCar from "../ActionComponents/AddCar";

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
    ],
  },
]);

export default router;
