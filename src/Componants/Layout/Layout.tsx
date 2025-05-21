import { Outlet } from "react-router-dom";
import { SideBar } from "./../SideBar/SideBar";
import { NavBar } from "../NavBar.tsx/NavBar";
export const Layout = () => {
  return (
    <div className="d-flex">
      <div>
        <SideBar />
      </div>
      <div className="w-100">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};
