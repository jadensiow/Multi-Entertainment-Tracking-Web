import React from "react";

import { Link } from "react-router-dom";

export const HeaderMovies = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="nav-links">
            <div>
              <Link to="/movies/watchlist">Watch List</Link>
            </div>
            <div>
              <Link to="/movies/completed">Movies Completed</Link>
            </div>
            <div>
              <Link to="/movies/add">Add Movies</Link>
            </div>
            {/*
            <div>
              <Link to="/Movies/random">Random Movies </Link>
            </div>*/}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMovies;
