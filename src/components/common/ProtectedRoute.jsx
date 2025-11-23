import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useAuth();

  // If user not logged in → redirect to login
  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → allow access
  return children;
};

export default ProtectedRoute;
