import { Link } from "react-router-dom";
import { Header } from "../components/header";

export const Users = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Lista de usuários</h1>
        <ul>
          <li>
            <Link to="/users/isabel-duarte">Isabel Duarte</Link>
          </li>
          <li>
            <Link to="/users/shelton-duarte">Shelton Duarte</Link>
          </li>
          <li>
            <Link to="/users/atalia-patissone">Atália Patissone</Link>
          </li>
        </ul>
      </main>
    </>
  );
};
