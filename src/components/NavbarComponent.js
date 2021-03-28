import React from "react";
import { Link, withRouter } from "react-router-dom";

import "../styles/NavbarComponentStyles.css";

const NavbarComponent = ({ location }) => {
  return (
    <nav className="container-new">
      <div id="other-links">
        <div className="link-container">
          <Link
            to="/anime"
            className={`nav-link ${
              location.pathname.includes("/anime") ? "nav-link-active" : ""
            }`}
          >
            <span> Anime </span>
          </Link>
        </div>

        <div className="link-container">
          <Link
            to={`/manga`}
            className={`nav-link ${
              location.pathname.includes(`/manga`) ? "nav-link-active" : ""
            }`}
          >
            <span> Manga </span>
          </Link>
        </div>

        <div className="link-container">
          <Link
            to={`/movies`}
            className={`nav-link ${
              location.pathname.includes(`/movies`) ? "nav-link-active" : ""
            }`}
          >
            <span> Movies </span>
          </Link>
        </div>

        <div className="link-container">
          <Link
            to={`/tvseries`}
            className={`nav-link ${
              location.pathname.includes(`/tvseries`) ? "nav-link-active" : ""
            }`}
          >
            <span> TV Series </span>
          </Link>
        </div>

        <div className="link-container">
          <Link
            to={`/books`}
            className={`nav-link ${
              location.pathname.includes(`/books`) ? "nav-link-active" : ""
            }`}
          >
            <span> Books </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavbarComponent);
