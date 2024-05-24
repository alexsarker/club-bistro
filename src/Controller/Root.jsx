import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  const location = useLocation();
  const noHeadFoot =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      <div>
        {noHeadFoot || <Navbar></Navbar>}
        <Outlet></Outlet>
      </div>
      {noHeadFoot || <Footer></Footer>}
    </div>
  );
};

export default Root;
