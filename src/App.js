import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import "./App.scss";
import About from "./components/About";
import Skills from "./components/Skills";

class App extends React.Component {
  render() {
    return (
      <div id="mainPage">
        <Nav />
        <Home />
        <About />
        <Skills />
      </div>
    );
  }
}

export default App;
