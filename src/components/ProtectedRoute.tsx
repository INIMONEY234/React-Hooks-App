import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import type { Role } from "../types/User";

interface Props {
  children: React.ReactNode;
  allowedRoles?: Role;
}
  
const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;