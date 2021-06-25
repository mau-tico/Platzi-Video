import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = () => (
  <React.Fragment>
    <section className="login">
      <section className="login__container">
        <h2>Iniciar sesión</h2>
        <form className="login__container--form">
          <input className="input" type="text" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input typeName="checkbox" id="cbox1" value="first_checkbox" />
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

export default Login;
