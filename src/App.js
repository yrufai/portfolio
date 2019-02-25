import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
