import React from "react"

import {gameObject, checkWin, changeTile} from "../functions/TicTacToeLogic.js"
import { Board } from "../components/Board.jsx"

export default class TicTacToeContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      gameObject: gameObject(),
      playerTurn: "X"
    }
  }
  
  changeTile (tileIndex) {
    const gameObject = this.state.gameObject
    changeTile(gameObject, tileIndex, this.state.playerTurn)
    this.setState({ gameObject })

    if(checkWin(this.state.gameObject)) this.onWinGame()
    this.changePlayer()
  }

  changePlayer () {
    const newPlayerTurn = (this.state.playerTurn === "X") ? "O" : "X"
    this.setState({ playerTurn: newPlayerTurn })
  }

  onWinGame () {
    console.log("X wins")
  }

  render () {
    return (
      <Board 
      onTileClick={this.changeTile.bind(this)} 
      board={this.state.gameObject.board} 
      />
    )
  }
}