import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/userForm";
import { startLogin, startLoginGoogle } from "../../redux/actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "carlos.santander@cablemundo.pe",
    password: "123456",
  });
  const { email, password } = formValues;

  const handleLogin = (evt) => {
    evt.preventDefault();
    dispatch(startLogin(formValues));
  };

  const handleLoginGoogle = (evt) => {
    evt.preventDefault();
    dispatch(startLoginGoogle());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form className="auth__form" onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Ingrese correo"
            name="email"
            className="auth__input"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Ingrese contraseña"
            name="password"
            className="auth__input"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Ingresar
        </button>

        <div className="auth__social-networks">
          <div className="google-btn" onClick={handleLoginGoogle}>
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
