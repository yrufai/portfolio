import React from "react";
import Particles from "./Particles";
import "./Home.scss";
import pic from "../elrufai.jpg";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
class Home extends React.Component {
  constructor(props) {
    super(props);
    //this.display = this.display.bind(this);
    this.state = {
      name: "I'm Ahmed El-rufai"
    };
  }

  /*componentWillMount() {
    this.display();
  }

  /*display() {
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
  }*/
  render() {
    return (
      <div className="home" id="homepage">
        <Particles />
        <Nav />
        <div className="nav-area">
          <img src={pic} alt="elrufai" />
          <div className="profile">
            <h3>Yakubu Ahmed El-rufai</h3>
            <h5>Front-End Developer</h5>
          </div>
          <div className="socialButtons">
            <button>
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </button>
            <button>
              <FontAwesomeIcon icon={faFreeCodeCamp} size="3x" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
