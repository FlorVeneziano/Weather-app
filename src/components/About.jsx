import React from "react";
import "./About.css";
import logoReact from "../img/react.png";
import logoBootstrap from "../img/bootstrap-logo.png";
import logoCss from "../img/css.png";

function About() {
  return (
    <span className="about">
      <div className="texto">
        <p>Hola! Mi nombre es Florencia. Soy Full-Stack Developer.</p>
        <p>
          Diseñé esta app en el bootcamp de Henry, siendo este, uno de mis
          primeros proyectos. <b>Creada con:</b>{" "}
        </p>
        <div className="imagenes">
          <p>
            <img id="React" src={logoReact} alt="React" />
            <img id="Bootstrap" src={logoBootstrap} alt="Bootstrap" />
            <img id="CSS" src={logoCss} alt="CSS" />
          </p>
        </div>
        <p>
          Podes buscar cualquier ciudad del mundo para ver que clima esta
          teniendo en este momento!
          <p>
            {" "}
            <b>API utilizada:</b>{" "}
            <a href="https://openweathermap.org/api">openweathermap</a>
          </p>
        </p>
      </div>
    </span>
  );
}

export default About;
