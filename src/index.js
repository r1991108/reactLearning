import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App /> {/*self-closing tag*/}
  </React.StrictMode>,
  document.querySelector("#root")
);
