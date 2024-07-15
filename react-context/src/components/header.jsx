import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/profile">Perfil</Link>
    </nav>
  );
};
