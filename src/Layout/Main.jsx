import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
