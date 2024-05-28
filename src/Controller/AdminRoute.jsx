import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (isAdminLoading) {
    return (
      <div className="flex justify-center my-96">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
