import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <Sidebar className="vh-100 sidebarContainer">
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem component={<Link to="/dashboard" />}> Documentation</MenuItem>
        <MenuItem component={<Link to="/dashboard/home" />}> Home</MenuItem>
        <MenuItem component={<Link to="/dashboard/users" />}> Users</MenuItem>
        <MenuItem component={<Link to="/dashboard/add-user" />}>
          {" "}
          Add User
        </MenuItem>

        <MenuItem component={<Link to="/dashboard/profile" />}>
          {" "}
          Profile
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
