import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../hooks/hooks";

export const ProtectedRoute = () => {
  const { user } = useAppContext();

  if (!user) {
    console.log("Unauthorized access, redirecting to login...");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

// || user.role !== "admin" || !user.isVerified
