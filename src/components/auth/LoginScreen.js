import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form className="auth__form">
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
        <button className="btn btn-primary" type="submit">
          Ingresar
        </button>

        <div className="auth__social-networks">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Ingresar con google</b>
            </p>
          </div>
        </div>
      </form>
      <div>
        <Link to="/auth/register" className="link">
          Crear nueva cuenta
        </Link>
      </div>
    </>
  );
};

export default LoginScreen;
