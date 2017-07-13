import React from "react";
import { Tile } from "./Tile.jsx";

export const Board = (props) => {
  let tilesInRow = [];
  const rows = props.board.map((tile, index) => {
    tilesInRow.push(
      <Tile index={index} symbol={tile} 
      key={index} onClick={props.onTileClick} />
    );
    
    if((index+1)%3 !== 0) return null;

    const subArray = tilesInRow;
    tilesInRow = [];

    return (
      <div key={`row-${index/3}`} className="tile-row">
        {subArray}
      </div>
    );
  });

  return (
    <div id="game-board">
      {rows}
    </div>
  );
};