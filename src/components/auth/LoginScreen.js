import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { startLogin, startLoginGoogle } from "../../redux/actions/auth";
import { loading } from "../../redux/actions/login";

const LoginScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const isLoading = state.login.isLoading;

  const [formValues, handleInputChange] = useForm({
    email: "carlos.santander@cablemundo.pe",
    password: "123456",
  });
  const { email, password } = formValues;

  const handleLogin = (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      dispatch(loading(true));
      dispatch(startLogin(email, password));
      history.replace("/");
    }
  };

  const handleLoginGoogle = (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      dispatch(startLoginGoogle());
      history.replace("/");
    }
  };

  const validateForm = () => {
    if (validator.isEmpty(email)) {
      Swal.fire({
        title: "Error!",
        text: "El correo es requerido",
        icon: "error",
      });
      return false;
    }
    if (!validator.isEmail(email)) {
      Swal.fire({
        title: "Error!",
        text: "El correo debe tener un formato válido",
        icon: "error",
      });
      return false;
    }
    if (validator.isEmpty(password)) {
      Swal.fire({
        title: "Error!",
        text: "La contraseña es requerida",
        icon: "error",
      });
      return false;
    }
    if (!validator.isLength(password, { min: 6, max: undefined })) {
      Swal.fire({
        title: "Error!",
        text: "La contraseña debe tener como mínimo 6 dígitos",
        icon: "error",
      });
      return false;
    }
    return true;
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
        <button className="btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <i className="fas fa-spinner fa-spin fa-lg mr-1" />
              <span>Ingresando</span>
            </>
          ) : (
            <>
              <i className="fas fa-sign-in-alt mr-1" />
              <span>Ingresar</span>
            </>
          )}
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
