import React from "react";
import "./about.scss";
import avator from "../elrufai.jpg";

const About = () => {
  return (
    <section id="aboutPage">
      <div className="about-title">
        <h3>01. About Me</h3>
      </div>
      <div className="about-content">
        <div className="writing">
          <p>
            I'm a front end software engineer who enjoys building things that
            live on the internet. I develop exceptional websites and web apps
            that provide intuitive, pixel-perfect user interfaces while being
            clean and efficient behind the scenes.
          </p>
          <p>
            Shortly after graduating from Northeastern University, I joined the
            engineering team at Upstatement where I get to work on a variety of
            interesting projects and improve my web development skillset on a
            daily basis.
          </p>
          <p>Here's a few things I'm experienced with:</p>
          <ul id="skills">
            <li>javascript</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="photo">
          <div id="pic">
            <img src={avator} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
