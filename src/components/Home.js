import React from "react";
import Particles from "./Particles";
import "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
    this.state = {
      name: "I'm Ahmed El-rufai"
    };
  }

  componentWillMount() {
    this.display();
  }

  display() {
    let index = 0;
    const getDem = setInterval(() => {
      let myString = this.state.name.charAt(index);
      document.getElementById("name").innerHTML += myString;
      let calor = document.getElementById("name");
      calor.style.color = "#d639bc";
      index++;
      if (index === this.state.name.length) {
        clearInterval(getDem);
        calor.style.color = "#8892b0";
      }
    }, 300);
  }
  render() {
    return (
      <div className="home" id="homepage">
        <Particles />
        <div className="nav-area">
          <div className="container">
            <h5 className="trans" id="hello">
              Hello,
            </h5>
            <h2 className="trans" id="name" />
            <h4 className="trans">MERN Fullstack Webs Developer</h4>
            <h5>Teacher</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
