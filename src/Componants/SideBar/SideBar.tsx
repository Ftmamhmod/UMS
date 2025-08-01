import { AiOutlineProfile } from "react-icons/ai";
import { IoBookmarkOutline, IoHomeOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
interface User {
  firstName: string;
  lastName: string;
  image: string;
}
export const SideBar = () => {
  const { userData } = useContext(AuthContext) as { userData: User | null };

  return (
    <Sidebar className=" sidebarContainer ">
      <h4 className="text-dark pt-2 pb-5 ">
        {" "}
        <span className="text-warning p-2">
          <b>|</b>
        </span>
        <b>UMS</b>
      </h4>
      <div className="sidebarLogo  text-center rounded-circle">
        <img
          src={userData?.image}
          alt="logo"
          className="img-fluid rounded-circle"
        />
        <h6 className="p-2">
          {userData?.firstName} {userData?.lastName}
        </h6>
        <p className="text-warning">Admin</p>
      </div>
      <Menu
        className="d-flex flex-column justify-content-center h-auto align-items-center  "
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem
          icon={<IoHomeOutline />}
          component={<Link to="/dashboard/home" />}
        >
          {" "}
          Home
        </MenuItem>
        <MenuItem
          icon={<IoBookmarkOutline />}
          component={<Link to="/dashboard/users" />}
        >
          {" "}
          Users
        </MenuItem>
        <MenuItem
          icon={<PiGraduationCap />}
          component={<Link to="/dashboard/add-user" />}
        >
          {" "}
          Add User
        </MenuItem>

        <MenuItem
          icon={<AiOutlineProfile />}
          component={<Link to="/dashboard/profile" />}
        >
          {" "}
          Profile
        </MenuItem>
        <hr />
        <MenuItem icon={<RiLogoutBoxRLine />} component={<Link to="/login" />}>
          {" "}
          Logout
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
