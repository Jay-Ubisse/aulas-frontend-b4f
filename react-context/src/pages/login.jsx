import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/auth-context";

export const Login = () => {
  const navigate = useNavigate();
  const { updateSession } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    updateSession(userData);
    navigate("/home");
  }

  return (
    <main>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Palavra-passe</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
};
