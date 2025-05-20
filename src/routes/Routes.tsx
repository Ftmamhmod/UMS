import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Componants/Login/Login";
import { NotFound } from "../Componants/NotFound/NotFound";
import { Home } from "../Componants/Home/Home";
import { About } from "../Componants/About/About";

export const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
