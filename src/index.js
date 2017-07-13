import React from "react";
import ReactDOM from "react-dom";

import TicTacToeContainer from "./containers/TicTacToeContainer.jsx";

const mountContainer = () => {
  ReactDOM.render(
    <TicTacToeContainer />,
    document.getElementById("tic-tac-toe-container")
  );
};

window.addEventListener("load", mountContainer);