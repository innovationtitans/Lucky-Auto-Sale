import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

const Dashboard = () => {
  const location = useLocation();
  const noOutlet = location.pathname.includes("^dashboard$");
  // const [isAdmin] = useAdmin();
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="drawer w-0 md:w-[15%] lg:drawer-open">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

          <div className="drawer-side z-30">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-48 min-h-screen bg-base-200 text-base-content font-Roboto font-semibold text-lg">
              {/* Sidebar content here */}
              <li>
                <NavLink to="/dashboard/addCar">Add Car</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/MyCollections">My Collections</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/oldBanner">DeleteOldBanner</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="flex-grow">
          <div className=" bg-base-300 w-fit mx-auto text-center  lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn  btn-outline"
            >
              Open the Drawer
            </label>
          </div>
          {noOutlet ? (
            <p>Hello</p>
          ) : (
            <div>
              <Outlet />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
