import { Navigate, Outlet } from "react-router-dom";

const LS_TOKEN = "fx_token";
const LS_USER = "fx_user";

export default function ProtectedRoute({ allowedRoles }) {
  const token = localStorage.getItem(LS_TOKEN);
  const user = JSON.parse(localStorage.getItem(LS_USER));

  // 🔐 not logged in
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // 🔥 role check
  if (
    allowedRoles &&
    !allowedRoles.some((role) => user.roles?.includes(role))
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}