import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginRequest } from "../actions";
import Header from "../components/Header";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = (props) => {
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
    props.loginRequest(form);
    //console.log(form);
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <Header isLogin />
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
            <button className="button">Iniciar sesión</button>
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
            ¿No tienes ninguna cuenta? <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

//export default Login;
export default connect(null, mapDispatchToProps)(Login);
