import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav style={{ margin: "20px" }}>
      <Link to="/" style={{ margin: "10px" }}>
        Página Inicial
      </Link>
      <Link to="/users" style={{ margin: "10px" }}>
        Usuários
      </Link>
      <Link to="/about" style={{ margin: "10px" }}>
        Sobre
      </Link>
    </nav>
  );
};
