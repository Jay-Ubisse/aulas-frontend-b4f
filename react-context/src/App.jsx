import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import { AuthContextProvider } from "./contexts/auth-context";
function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={route} />
      </AuthContextProvider>
    </>
  );
}

export default App;
