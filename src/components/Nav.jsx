import React from "react";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";
import Logo from "../img/Circle-icons-weather.svg";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-light" Style="background-color: #372e8a77;">
      <Link to={"/"}>
        <img
          id="logo"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <span className="text2">Home</span>
      </Link>
      <Link to={"/about"} className="text">
        About
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
