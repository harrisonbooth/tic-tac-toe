import React from "react";

export const WinDisplay = (props) => {
  if(!props.winner) return null;

  return (
    <div id="win-display">
      <h1>{props.winner} wins!</h1>
      <button onClick={props.onResetClick} id="reset-button">Play again!</button>
    </div>
  );
};