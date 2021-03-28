import React from "react";

import { Link } from "react-router-dom";

export const HeaderAnime = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="nav-links">
            <div>
              <Link to="/anime/watchlist">Anime List</Link>
            </div>
            <div>
              <Link to="/anime/completed">Anime Completed</Link>
            </div>
            <div>
              <Link to="/anime/add">Add Anime</Link>
            </div>
            {/*
            <div>
              <Link to="/anime/random">Random Anime </Link>
            </div>
            */}{" "}
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderAnime;
