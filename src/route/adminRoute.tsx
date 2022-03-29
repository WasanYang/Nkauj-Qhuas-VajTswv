import AdminLayout from "../components/Layout/AdminLayout";
import { Outlet } from "react-router-dom";

export function AdminRoute() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
