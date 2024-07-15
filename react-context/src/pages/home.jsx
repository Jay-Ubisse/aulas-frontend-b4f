import { useContext } from "react";
import AuthContext from "../contexts/auth-context";
import { Header } from "../components/header";

export const Home = () => {
  const { session } = useContext(AuthContext);
  return (
    <main>
      <Header />
      <h1>Olá, {session.name}</h1>
      <p>O seu email é {session.email}</p>
    </main>
  );
};
