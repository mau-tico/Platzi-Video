import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = () => {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <React.Fragment>
      <section className="login">
        <section className="login__container">
          <h2>Iniciar sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              className="input"
              name="email"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button" >Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} /> Iniciar sesión con Google
            </div>
            <div>
              <img src={twitterIcon} /> Iniciar sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            ¿No tienes ninguna cuenta?
            <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Login;
