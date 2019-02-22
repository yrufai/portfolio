import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="brand">El-rufai</div>
        <ul className="navlist">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div
        className="burger"
        onClick={() => {
          const nave = document.querySelector(".navlist");
          const toggle = document.querySelector(".burger");
          toggle.classList.toggle("toggle");
          const links = document.querySelectorAll(".navlist li");
          nave.classList.toggle("active-nav");
          links.forEach((links, index) => {
            if (links.style.animation) {
              links.style.animation = "";
            } else {
              links.style.animation = `anim-navlinks 0.4s ease forwards ${index /
                4 +
                1.5}s`;
            }
          });
        }}
      >
        <div className="class1" />
        <div className="class2" />
        <div className="class3" />
      </div>
    </nav>
  );
};

export default Nav;
