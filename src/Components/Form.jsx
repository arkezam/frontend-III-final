import React, { useState } from "react";
import Message from "./Message";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexEmail =/^\S+@\S+\.\S+$/
        console.log(regexEmail.test(user.email));
    if (
      user.nombre.length >= 5 &&
      regexEmail.test(user.email)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  console.log(user);
  return (
    <div>
      <h2>Ingrese información</h2>

      {show ? (
        <Message nombre={user.nombre} email={user.email} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Ingrese su Nombre</label>
          <input
            type="text"
            //   value={nombre}
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
            placeholder="Nombre"
          />
          <label>Ingrese su Email</label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          placeholder="Email"
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor verifique su información nuevamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};


export default Form;
