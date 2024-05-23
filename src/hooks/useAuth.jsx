import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
