import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form className="auth__form">
        <div>
          <input
            type="text"
            placeholder="Ingrese nombre"
            name="name"
            className="auth__input"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Ingrese correo"
            name="email"
            className="auth__input"
            autoComplete="off"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Ingrese contraseña"
            name="password"
            className="auth__input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            name="password_"
            className="auth__input"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Registrar
        </button>
      </form>
      <div>
        <Link to="/auth/login" className="link">
          Usted ya está registrado?
        </Link>
      </div>
    </>
  );
};

export default RegisterScreen;
