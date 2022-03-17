import { Route, Routes } from "react-router-dom";
import AdminLayout from "../components/Layout/AdminLayout";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { HomePage } from "./../pages/HomePage/HomePage";
// import { MainLayout } from "./../components/Layout/MainLayout";
import { Fragment } from "react";
import MainLayout from "../components/Layout/MainLayout";
export function AppRouter() {
  return (
    <Routes>
      {/* <Route path="/admin" element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
      </Route> */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
      <Route path="*" element={<Fragment>404 page</Fragment>} />
    </Routes>
  );
}
