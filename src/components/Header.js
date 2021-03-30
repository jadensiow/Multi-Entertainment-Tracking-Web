import React from "react";
import { Link } from "react-router-dom";


export const Header = ({ linksAndNames }) => {
  console.log(linksAndNames);
  return (
    <div id="header-content">
      {linksAndNames.map((l) => (
        <div className="header-item" key={l.name}>
          <Link className="header-link" to={l.link}>
            {l.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
