import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Componants/Login/Login";
import { NotFound } from "../Componants/NotFound/NotFound";
import { Home } from "../Componants/Home/Home";
import { About } from "../Componants/About/About";
import { AuthLayout } from "../Componants/AuthLayout/AuthLayout";
import { Layout } from "../Componants/Layout/Layout";
import { UsersList } from "../Componants/UsersList/UsersList";
import { AddUser } from "../Componants/AddUser/AddUser";
import { Profile } from "../Componants/Profile/Profile";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "dashboard",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "users", element: <UsersList /> },
      { path: "add-user", element: <AddUser /> },
      { path: "profile", element: <Profile /> },

      { path: "about", element: <About /> },
    ],
  },
]);
