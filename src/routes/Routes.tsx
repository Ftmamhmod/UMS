import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Componants/Login/Login";
import { NotFound } from "../Componants/NotFound/NotFound";
import { Home } from "../Componants/Home/Home";
import { About } from "../Componants/About/About";
import { AuthLayout } from "../Componants/AuthLayout/AuthLayout";
import { Layout } from "../Componants/Layout/Layout";
import { UsersList } from "../Componants/UsersList/UsersList";
import { UserForm } from "../Componants/UserForm/UserForm";
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
      { path: "user-form/:id?", element: <UserForm /> },
      { path: "profile", element: <Profile /> },

      { path: "about", element: <About /> },
    ],
  },
]);
