import React from "react";
import "./Ciudad.css";
import { Link } from "react-router-dom";

export default function Ciudad({ ciudad }) {
  if (!ciudad) {
    return (
      <div className="alert">
        <div id="alert" class="alert alert-primary" role="alert">
          La ciudad no existe!
          <Link to={"/"}>
            <button type="button" class="btn btn-info" id="close-button">
              Home
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="ciudad">
      <div className="container">
        <h2 className="title">{ciudad.name}</h2>
        <div className="row">
          <div className={"col-sm-4 col-md-4 col-lg-4"}>
            <p className="info">Temperatura:</p> <p>{ciudad.temp} ºC</p>
          </div>
          <div className={"col-sm-4 col-md-4 col-lg-4"}>
            <p className="info">Clima:</p> <p>{ciudad.weather}</p>
          </div>
          <div className={"col-sm-4 col-md-4 col-lg-4"}>
            <p className="info"> Viento:</p> <p>{ciudad.wind} km/h</p>
          </div>
          <div className={"col-sm-4 col-md-4 col-lg-4"}>
            <p className="info">Cantidad de nubes:</p> <p> {ciudad.clouds}</p>
          </div>
          <div className={"col-sm-4 col-md-4 col-lg-4"}>
            <p className="info">Latitud: </p>
            <p> {ciudad.latitud}º</p>
          </div>
          <div className={"col-sm-4 col-md-4 col-lg-4"}>
            <p className="info"> Longitud:</p> <p>{ciudad.longitud}º</p>
          </div>

          <img
            className="icono"
            src={"http://openweathermap.org/img/wn/" + ciudad.img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
