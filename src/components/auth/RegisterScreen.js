import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { startRegister } from "../../redux/actions/auth";

const RegisterScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isFormValid, setIsFormValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [formValues, handleInputChange] = useForm({
    name: "Carlos Santander",
    email: "carlos.santander@cablemundo.pe",
    password: "123456",
    password_: "123456",
  });
  const { name, email, password, password_ } = formValues;

  const handleRegister = (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      dispatch(startRegister(name, email, password));
      history.push("/auth/login");
    }
  };

  const validateForm = () => {
    if (validator.isEmpty(name)) {
      setErrorMsg("El nombre es requerido");
      setIsFormValid(false);
      return false;
    }
    if (validator.isEmpty(email)) {
      setErrorMsg("El correo es requerido");
      setIsFormValid(false);
      return false;
    }
    if (!validator.isEmail(email)) {
      setErrorMsg("El correo debe tener un formato válido");
      setIsFormValid(false);
      return false;
    }
    if (validator.isEmpty(password)) {
      setErrorMsg("La contraseña es requerida");
      setIsFormValid(false);
      return false;
    }
    if (!validator.isLength(password, { min: 6, max: undefined })) {
      setErrorMsg("La contraseña debe tener como mínimo 6 dígitos");
      setIsFormValid(false);
      return false;
    }
    if (validator.isEmpty(password_)) {
      setErrorMsg("La confirmación de contraseña es requerida");
      setIsFormValid(false);
      return false;
    }
    if (!validator.equals(password, password_)) {
      setErrorMsg("Las contraseñas deben ser iguales");
      setIsFormValid(false);
      return false;
    }
    setErrorMsg("");
    setIsFormValid(true);
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form className="auth__form" onSubmit={handleRegister}>
        {!isFormValid && <div className="auth__alert-error">{errorMsg}</div>}
        <div>
          <input
            type="text"
            placeholder="Ingrese nombre"
            className="auth__input"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Ingrese correo"
            className="auth__input"
            autoComplete="off"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Ingrese contraseña"
            className="auth__input"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="auth__input"
            name="password_"
            value={password_}
            onChange={handleInputChange}
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
