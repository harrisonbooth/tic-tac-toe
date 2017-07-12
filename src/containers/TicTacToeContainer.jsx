import React from "react"
import {gameObject, checkWin, changeTile} from "../functions/TicTacToeLogic.js"
import { Board } from "../components/Board.jsx"
import { WinDisplay } from "../components/WinDisplay.jsx"

export default class TicTacToeContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      gameObject: gameObject(),
      playerTurn: "X",
      winner: null
    }
  }
  
  changeTile (tileIndex) {
    const gameObject = this.state.gameObject
    changeTile(gameObject, tileIndex, this.state.playerTurn)
    this.setState({ gameObject })

    if(checkWin(this.state.gameObject)) {
      this.onWinGame()
      return
    }
    this.changePlayer()
  }

  changePlayer () {
    const newPlayerTurn = (this.state.playerTurn === "X") ? "O" : "X"
    this.setState({ playerTurn: newPlayerTurn })
  }

  onWinGame () {
    this.setState({ winner: this.state.playerTurn })
  }

  render () {
    return (
      <div>
      <Board onTileClick={this.changeTile.bind(this)} 
      board={this.state.gameObject.board} />
      
      <WinDisplay winner={this.state.winner} />
      </div>
    )
  }
}