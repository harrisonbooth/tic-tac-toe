import React from 'react'

export const Tile = (props) => {
  const onTileClick = () => {
    props.onClick(props.index)
  }

  return (
    <div className={`tile ${props.symbol}`} onClick={onTileClick}>
    </div>
  )
}