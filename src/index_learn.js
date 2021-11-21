// const React = require("react");
// const ReactDOM = require("react-dom");
// ES6
import React from "react";
import ReactDOM from "react-dom";

// function App() {
//   return React.createElement("h1", null, "this is react app");
// }

// function App2() {
//   return React.createElement("div", null, [
//     React.createElement("h1", { style: { color: "red" } }, "My profile"),
//     React.createElement("p", null, "My Name is Mike"),
//     React.createElement("button", null, "Check My Profile"),
//   ]);
// }

// JSX version
function App2() {
  // in javascript, one function can only return one value. Therefore, anytime we want to make more than one element, we have to include them in one element, such as "div"
  return (<div>
    <h1>My Profile</h1>
    <p>My name is Mike.</p>
    <button>Check my profile.</button>
  </div>)
}

// ReactDOM.render(React.createElement(App2), document.querySelector("#root"));
ReactDOM.render(App2(), document.querySelector("#root"));
