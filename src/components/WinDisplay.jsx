import React from "react"

export const WinDisplay = (props) => {
  if(!props.winner) return null

  return (
    <div id="win-display">
      <h1>{props.winner} wins!</h1>
    </div>
  )
}