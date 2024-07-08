import { Header } from "../components/header";
import { useParams } from "react-router-dom";

export const UserDatails = () => {
  const params = useParams();

  return (
    <>
      <Header />
      <main>
        <h1>
          Olá,{" "}
          {params.username.split("-")[0].charAt(0).toUpperCase() +
            params.username.split("-")[0].slice(1)}{" "}
          {params.username.split("-")[1].charAt(0).toUpperCase() +
            params.username.split("-")[1].slice(1)}
          .
        </h1>
      </main>
    </>
  );
};
