import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import Alert from "../Shared/Alert";
import useAuth from "../Hooks/useAuth";

const Main = () => {
  const { user } = useAuth();
  return (
    <div>
      {user && <Alert />}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
