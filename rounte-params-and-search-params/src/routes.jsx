import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Users } from "./pages/users";
import { UserDatails } from "./pages/user-details";
import { ErrorPage } from "./pages/error-page";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:username",
    element: <UserDatails />,
  },
]);
