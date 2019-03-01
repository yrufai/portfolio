import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faReact,
  faSass,
  faGit,
  faNode,
  faJs,
  faBlackberry,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./Skills.scss";
const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-title">
        <h1>MY SKILLS</h1>
      </div>
      <div className="skill">
        <div className="set">
          <h2>
            <FontAwesomeIcon icon={faCaretRight} color="white" />
            Front-End:
          </h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Flexbox</li>
          </ul>
        </div>
        <div className="set">
          <h2>
            <FontAwesomeIcon icon={faCaretRight} color="white" />
            Back-End:
          </h2>
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB/Mongoose</li>
            <li>REST/APIs</li>
            <li>Heroku</li>
            <li>PassportJS</li>
          </ul>
        </div>
        <div className="set">
          <h2>
            <FontAwesomeIcon icon={faCaretRight} color="white" />
            Tools:
          </h2>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>VS CODE</li>
            <li>NPM</li>
            <li>Chrome</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
