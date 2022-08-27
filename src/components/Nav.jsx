import React, { useEffect, useState } from "react";
import "./Nav.css";

import { Link, NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Movie from "../nav-pages/Movie";
import TV from "../nav-pages/TV";

const Nav = () => {
  const [show, handleShow] = useState(false);
  // const [searchMovie, setSearchMovie] = useState("");
  // const [resultMovie, setResultMovie] = useState([]);
  // const apiKey = "8a2705651c885ab1d285fc80ee1021c5";
  // const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${searchMovie}`;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => console.log("first"));
    };
  }, []);
  return (
    <>
      <nav className={`nav ${show && "nav__black"}`} id="nav">
        <Link to={"/"}>
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            className="nav__logo"
            alt="netflix logo"
            loading="lazy"
          />
        </Link>
        <ul className="nav__links">
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/tv">TV Series</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
