import React from "react";
import ReactDOM from "react-dom";

const name = "Abhilov";
ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
); //Here we are creating a random lucky number In JS
