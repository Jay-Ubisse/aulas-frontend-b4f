import { useContext } from "react";
import AuthContext from "../contexts/auth-context";
import { Header } from "../components/header";

export const Profile = () => {
  const { session, updateSession } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: "hhhhhh",
    };
    updateSession(userData);
  }

  return (
    <main>
      <Header />
      <h1>Profile Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input type="text" name="name" placeholder={session.name} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" placeholder={session.email} />
        </div>
        <button type="submit">Actualizar dados</button>
      </form>
    </main>
  );
};
