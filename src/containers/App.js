import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "../components/Nav";
import Cards from "../components/Cards";
import Ciudad from "../components/Ciudad";
import About from "../components/About";
import "./App.css";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.main !== undefined) {
          const ciudad = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Route path={"/"} render={() => <Nav onSearch={onSearch} />} />
      <Route
        exact
        path={"/"}
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route exact path={"/about"} render={() => <About />} />
      <Route
        exact
        path={"/ciudad/:ciudadId"}
        render={({ match }) => (
          <Ciudad ciudad={onFilter(match.params.ciudadId)} />
        )}
      />
    </div>
  );
}

export default App;
