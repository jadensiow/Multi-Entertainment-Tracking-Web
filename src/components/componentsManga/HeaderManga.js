import React from "react";

import { Link } from "react-router-dom";

export const HeaderManga = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="nav-links">
            <div>
              <Link to="/manga/watchlist">Manga List</Link>
            </div>
            <div>
              <Link to="/manga/completed">Manga Completed</Link>
            </div>
            <div>
              <Link to="/manga/add">Add Manga</Link>
            </div>
            {/*
            <div>
              <Link to="/manga/random">Random Manga </Link>
            </div>*/}
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderManga;
