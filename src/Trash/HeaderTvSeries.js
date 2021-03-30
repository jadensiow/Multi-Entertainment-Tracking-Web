import React from "react";
import { Link } from "react-router-dom";

export const HeaderTvSeries = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="nav-links">
            <div>
              <Link to="/tvseries/watchlist">Watch List</Link>
            </div>
            <div>
              <Link to="/tvseries/completed">Tv Series Completed</Link>
            </div>
            <div>
              <Link to="/tvseries/add">Add Tv Series</Link>
            </div>
            {/*<div>
              <Link to="/tvseries/random">Random Tv Series </Link>
            </div>*/}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTvSeries;
