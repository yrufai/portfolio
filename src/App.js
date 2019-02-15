import React, { Component } from "react";
import avator from "./elrufai.jpg";
import "./App.scss";
import Particles from "react-particles-js";
import config from "./particlesjs-config.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Particles params={config.params} className="particles" />
          <div className="avatar">
            <img src={avator} />
          </div>
          <div className="namep">
            <h1>Yakubu Ahmed El-Rufai</h1>
            <h3>Web Developer</h3>
            <h5>Teacher</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
