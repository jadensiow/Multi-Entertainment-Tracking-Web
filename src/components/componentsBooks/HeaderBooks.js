import React from "react";

import { Link } from "react-router-dom";

export const HeaderBooks = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="nav-links">
            <div>
              <Link to="/books/watchlist">Books List</Link>
            </div>
            <div>
              <Link to="/books/completed">Books Completed</Link>
            </div>
            <div>
              <Link to="/books/add">Add Books</Link>
            </div>
            {/*<div>
              <Link to="/books/random">Random Books </Link>
            </div>*/}
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderBooks;
