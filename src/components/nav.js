import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="brand">El-rufai</div>
        <ul className="navlist">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="burger">
        <div className="class1" />
        <div className="class2" />
        <div className="class3" />
      </div>
    </nav>
  );
};

export default Nav;
