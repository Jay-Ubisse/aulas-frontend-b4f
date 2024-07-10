import { Link, useSearchParams } from "react-router-dom";

export const Header = () => {
  const [setSearchParams] = useSearchParams();

  function handleSearchForm(e) {
    e.preventDefault();
    const searchString = e.target.search.value;

    setSearchParams({ search: searchString });
  }
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
      <form onSubmit={handleSearchForm}>
        <input type="search" name="search" placeholder="Procure um nome..." />
      </form>
    </nav>
  );
};
