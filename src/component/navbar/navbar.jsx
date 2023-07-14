import React from "react";
import "./navbar.css";
import "../../fonts/fonts.css";
import Project from "../project/project";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1 className="namaWeb">
        <a href="#nav"> Bagass</a>
      </h1>

      <div className="menuWrapper">
        <a href="#about" className="menuItem">
          About
        </a>
        <a href={<Project />} className="menuItem">
          Portofolio
        </a>
        <a href="#tech" className="menuItem">
          Tech
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
