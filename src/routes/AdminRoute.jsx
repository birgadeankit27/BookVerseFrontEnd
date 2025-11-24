import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  // user.roles example: ["ROLE_ADMIN", "ROLE_USER"]
  const isAdmin = user.roles?.includes("ROLE_ADMIN");

  return isAdmin ? children : <Navigate to="/" replace />;
};

export default AdminRoute;
