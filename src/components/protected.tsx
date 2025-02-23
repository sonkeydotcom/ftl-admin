import { Navigate, Outlet } from "react-router-dom";

// Type for the user with admin status
interface User {
  id: string;
  email: string;
  isAdmin: boolean;
  // ... other user properties
}

// Check if user is authenticated
const useAuth = () => {
  // Get user from localStorage or your auth state
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  ) as User | null;
  return user;
  console.log(user);
};

// Protected Route wrapper component
export const ProtectedRoute = () => {
  const user = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

// Admin Route wrapper component
export const AdminRoute = () => {
  const user = useAuth();

  if (!user || !user.isAdmin) {
    // Redirect non-admin users to dashboard or another appropriate page
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
