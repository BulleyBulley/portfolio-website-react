import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav_container">
        <div class="nav_wrapper">
        <div class="nav_logo">
                   <h3> PB. </h3>
                </div>

        <div class ="nav-items">
      <Link className="nav_text" to="/">
        home
      </Link>
      <Link className="nav_text" to="/post">
        about
      </Link>
      <Link className="nav_text" to="/portfolio">
        portfolio
      </Link>
      <Link className="nav_text" to="/post">
        contact
      </Link>
      </div>
      </div>
    </nav>
  );
};

export default Nav;
