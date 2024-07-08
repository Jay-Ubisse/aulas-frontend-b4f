import { RouterProvider } from "react-router-dom";
import { route } from "./routes";

export const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};
