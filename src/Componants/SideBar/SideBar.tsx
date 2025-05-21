import { AiOutlineProfile } from "react-icons/ai";
import { IoBookmarkOutline, IoHomeOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import img1 from "../../../public/pexels-photo-2379004 1.png";
export const SideBar = () => {
  return (
    <Sidebar className="vh-100 sidebarContainer">
      <h4 className="text-dark pt-2 pb-5 ">
        {" "}
        <span className="text-warning p-2">
          <b>|</b>
        </span>
        <b>UMS</b>
      </h4>
      <div className="sidebarLogo  text-center rounded-circle">
        <img src={img1} alt="logo" className="img-fluid rounded-circle" />
        <h6>Karthi Madesh</h6>
        <p className="text-warning">Admin</p>
      </div>
      <Menu
        className="ps-5"
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
