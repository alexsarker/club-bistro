import { Link, Outlet } from "react-router-dom";
import logo from "/src/assets/navLogo.svg";
import { FaCartShopping } from "react-icons/fa6";
import { FaCalendarAlt, FaWallet } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdReviews } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full bg-main font-semibold cinzel text-base">
            <img src={logo} className="max-w-56 mb-14" />
            {/* Sidebar content here */}
            <li>
              <Link
                to="/dashboard/home"
                className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
              >
                <GoHomeFill />
                User Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cart"
                className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
              >
                <FaCartShopping />
                My Cart
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/reservation"
                className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
              >
                <FaCalendarAlt />
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/payment"
                className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
              >
                <FaWallet />
                Payment history
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/review"
                className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
              >
                <MdReviews />
                Add review
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/booking"
                className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
              >
                <RiReservedFill />
                My booking
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
