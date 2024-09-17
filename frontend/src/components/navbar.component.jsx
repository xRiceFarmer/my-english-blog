import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/learn">Learn</a>
            </li>
          </ul>
        </div>
        <div className="navbar-center lg:flex-none">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
            English Blog
          </a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex lg:flex-1 lg:justify-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="learn">Learn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
