import { useForm } from "react-hook-form";

function App() {
  const errorStyles = { color: "red", fontSize: "12px", lineHeight: "18px" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", {
            required: "O nome é obrigatório!",
            minLength: {
              value: 4,
              message: "Mano, não existe nome com 3 letras.",
            },
          })}
          placeholder="Nome"
        />
        {errors.name && <p style={errorStyles}>{errors.name.message}</p>}
        <input
          type="email"
          {...register("email", {
            required: "O email é obrigatório!",
          })}
          placeholder="Email"
        />
        {errors.email && <p style={errorStyles}>{errors.email.message}</p>}
        <button type="submit">Submeter</button>
      </form>
    </>
  );

  {
    //USING FormData
    /**
   function handleOnSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    console.log("Dados do usuário: ", data);
  }
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="Nome" required />
        <input type="email" email="email" placeholder="Email" required />
        <button type="submit">Submeter</button>
      </form>
    </>
  ); */
  }
}

export default App;
