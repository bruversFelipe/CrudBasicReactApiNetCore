import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Home />,
  document.getElementById("root")
); /* Arquivo index para definir que a root vai ser a div pai, e que vai renderizar meu componente home */
