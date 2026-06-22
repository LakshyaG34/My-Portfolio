import { Navigate, Outlet } from "react-router-dom";

const LS_TOKEN = "fx_token";
const LS_ROLES = "fx_roles";

export default function PublicRoute() {
  const token = localStorage.getItem(LS_TOKEN);
  const roles = JSON.parse(localStorage.getItem(LS_ROLES) || "[]");

  if (token) {
    if (roles.includes("client")) {
      return <Navigate to="/client/dashboard" replace />;
    }

    if (roles.includes("employee")) {
      return <Navigate to="/employee/dashboard" replace />;
    }

    if (roles.includes("admin")) {
      return <Navigate to="/admin/dashboard" replace />;
    }
  }

  return <Outlet />;
}