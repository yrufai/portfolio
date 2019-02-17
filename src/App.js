import React, { Component } from "react";
import avator from "./elrufai.jpg";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faFreeCodeCamp,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="navbar">navbar</div>
        <div className="content">
          <div className="left-section">
            <div className="social">
              <ul />
              <li>
                <FontAwesomeIcon icon={faGithub} color="white" size="lg" />
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} color="white" size="lg" />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faFreeCodeCamp}
                  color="white"
                  size="lg"
                />
              </li>
              <li>
                <FontAwesomeIcon icon={faCodepen} color="white" size="lg" />
              </li>
            </div>
          </div>
          <div className="main-area">
            <p id="p1">Hi, my name is </p>
            <h1>Yakubu A. El-Rufai</h1>
            <h1 id="h2">I build things for the web</h1>
            <p id="p2">
              I'm a software engineer based in Boston, MA specializing in
              developing (and occasionally designing) exceptional, high-quality
              websites and applications. Currently working at Upstatement as an
              Engineer.
            </p>
          </div>
          <div className="right-section">right</div>
        </div>
      </div>
    );
  }
}

export default App;
