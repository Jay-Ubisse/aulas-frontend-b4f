import { useContext } from "react";
import AuthContext from "../contexts/auth-context";

export const Home = () => {
  const { session, setSession } = useContext(AuthContext);
  return (
    <main>
      <h1>Olá, {session.name}</h1>
    </main>
  );
};
