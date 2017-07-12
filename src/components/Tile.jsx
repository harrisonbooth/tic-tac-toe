import React from 'react'

export const Tile = (props) => {
  const onTileClick = () => {
    props.onClick(props.index)
  }

  return (
    <div className="tile" onClick={onTileClick}>
      <p>{props.symbol}</p>
    </div>
  )
}