import { Route, Routes } from "react-router-dom";
import { HomePage } from "./../pages/HomePage/HomePage";
import { Fragment } from "react";
import { SongManagementPage } from "../pages/SongManagementPage/SongManagementPage";
import { AdminRoute } from "./adminRoute";
import { LayoutV2 } from './../components/Layout/LayoutV2';
export function AppRouter() {
  return (
    <Routes>
      <Route element={<AdminRoute />}>
        <Route path="/song-management" element={<SongManagementPage />}></Route>
      </Route>
      <Route element={<LayoutV2 />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
      <Route path="*" element={<Fragment>404 page</Fragment>} />
    </Routes>
  );
}
