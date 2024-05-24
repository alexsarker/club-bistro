import { Link } from "react-router-dom";
import logo from "/src/assets/navLogo.svg";
import { AuthContext } from "../Controller/AuthProvider";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import useCart from "../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          className="lg:text-white lg:hover:bg-[#FF9933] hover:text-white"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="lg:text-white lg:hover:bg-[#FF9933] hover:text-white"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="lg:text-white lg:hover:bg-[#FF9933] hover:text-white"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/menu"
          className="lg:text-white lg:hover:bg-[#FF9933] hover:text-white"
        >
          Our Menu
        </Link>
      </li>
      <li>
        <Link
          to="/shop/salad"
          className="lg:text-white lg:hover:bg-[#FF9933] hover:text-white"
        >
          Our Shop
        </Link>
      </li>
    </>
  );
  return (
    <div className="relative">
      <div className="navbar bg-opacity-20 z-20 bg-black absolute px-4 md:px-12 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
              className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img
              src={logo}
              alt="Club Bistro"
              className="md:max-w-56 lg:max-w-56"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-6">
          <Link
            to="dashboard/cart"
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <Link to="dashboard/cart" className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white hover:text-[#FF9933]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart.length}
              </span>
            </Link>
          </Link>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[20] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      logOut().then(toast.success("Logout Successfully"))
                    }
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-main text-white px-10 border-none hover:bg-[#E7811B]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Navbar;
