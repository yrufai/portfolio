import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faFacebook,
  faFreeCodeCamp,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faFacebook, faFreeCodeCamp, faCodepen);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
