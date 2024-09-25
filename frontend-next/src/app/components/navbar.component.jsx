import Link from "next/link";
import Image from "next/image";
import logo from "../imgs/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-accent-content">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-accent-content"
          >
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/learn">Learn</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center lg:flex-none">
          <Link href="/" className="btn btn-ghost normal-case text-xl text-accent-content">
            <Image src={logo} alt="Logo" width={32} height={32} className="mr-2" />
            English Blog
          </Link>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex lg:flex-1 lg:justify-end">
        <ul className="menu menu-horizontal px-1 text-accent-content">
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/learn">Learn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;