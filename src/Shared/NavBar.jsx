import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import useAuth from "../Hooks/useAuth";
const NavBar = () => {
  const { user } = useAuth();
  const nav = (
    <>
      <li>
        <Link className="font-Roboto font-bold" to="/">
          HOME
        </Link>
      </li>

      <li>
        <Link className="font-Roboto font-bold" to="/inventory">
          OUR LISTINGS
        </Link>
      </li>

      <li>
        <Link className="font-Roboto font-bold" to="/about">
          ABOUT US
        </Link>
      </li>
      {user && (
        <li>
          <Link className="font-Roboto font-bold" to="/dashboard">
            DASHBOARD
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between max-w-7xl mx-auto">
      <Link to="/" className="w-fit cursor-pointer">
        <img className="w-[75%] " src={logo} alt="Store Logo" />
      </Link>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box min-w-40 "
        >
          {nav}
        </ul>
      </div>

      <div className="navbar-end hidden w-[1200px] lg:flex lg:justify-end">
        <ul className="menu menu-horizontal px">{nav}</ul>
      </div>
    </div>
  );
};

export default NavBar;
