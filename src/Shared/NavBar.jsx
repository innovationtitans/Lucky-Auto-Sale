import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const NavBar = () => {
  const nav = (
    <>
      <li>
        <Link className="font-Roboto font-bold" to="/">
          HOME
        </Link>
      </li>
      <li>
        <details className="font-Roboto font-bold">
          <summary>CAR FOR SALE</summary>
          <ul className="p-2 ">
            <li>
              <Link to="/#">SUV LISTING</Link>
            </li>
            <li>
              <Link to="/#">CAR LISTING</Link>
            </li>
            <li>
              <Link to="/#">VAN LISTING</Link>
            </li>
            <li>
              <Link to="/#">ALL LISTING</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link className="font-Roboto font-bold" to="/about">
          ABOUT US
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between max-w-7xl mx-auto">
      <img className="w-[75%] lg:w-1/3" src={logo} alt="Store Logo" />
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

      <div className="navbar-end hidden lg:flex lg:justify-end">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
    </div>
  );
};

export default NavBar;
