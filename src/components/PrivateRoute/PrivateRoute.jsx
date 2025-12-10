import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.currentUser !== null)

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
