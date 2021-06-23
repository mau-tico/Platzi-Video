import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./assets/styles/App.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
