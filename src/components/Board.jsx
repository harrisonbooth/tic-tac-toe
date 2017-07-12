import React from 'react'

import { Tile } from "./Tile.jsx"

export const Board = (props) => {
  const tiles = props.board.map((tile, index) => {
    return <Tile onClick={props.onTileClick} symbol={tile} index={index} key={index} />
  })

  return (
    <div id="game-board">
      {tiles}
    </div>
  )
}