import { Link, Outlet } from "react-router-dom";
import logo from "/src/assets/navLogo.svg";
import { FaBook, FaCartShopping, FaList, FaUsers } from "react-icons/fa6";
import {
  FaCalendarAlt,
  FaHouseUser,
  FaShoppingBag,
  FaWallet,
} from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdMenuBook, MdReviews } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";
import useCart from "../hooks/useCart";
import { IoFastFoodSharp } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();
  return (
    <div className="md:flex lg:flex bg-[#F6F6F6]">
      <div className="drawer lg:drawer-open border w-72">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-main text-white hover:bg-[#E7811B] lg:hidden"
          >
            Menu
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
            {isAdmin ? (
              <>
                {" "}
                <li>
                  <Link
                    to="/dashboard/home"
                    className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
                  >
                    <FaHouseUser />
                    Admin Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/addItems"
                    className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
                  >
                    <IoFastFoodSharp />
                    Add Items
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/home"
                    className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
                  >
                    <FaList />
                    Manage Items
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/home"
                    className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
                  >
                    <FaBook />
                    Manage Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allUsers"
                    className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
                  >
                    <FaUsers />
                    All Users
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <Link
                    to="/dashboard/home"
                    className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
                  >
                    <FaHouseUser />
                    User Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/cart"
                    className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
                  >
                    <FaCartShopping />
                    My Cart ({cart.length})
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
              </>
            )}
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <Link
                to="/"
                className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
              >
                <GoHomeFill />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
              >
                <MdMenuBook />
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/shop/salad"
                className="hover:bg-[#E7811B] items-center gap-4 hover:text-white"
              >
                <FaShoppingBag />
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
