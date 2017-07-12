export const gameObject = () => {
  const board = [
    null, null, null,
    null, null, null,
    null, null, null,
  ]

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  return {
    board,
    winConditions
  }
}

export const checkWin = (gameObject) => {
  const board = gameObject.board
  const winConditions = gameObject.winConditions
  let winningBoard = false

  winConditions.forEach((winCondition) => {
    if(
      board[winCondition[0]] === board[winCondition[1]] &&
      board[winCondition[1]] === board[winCondition[2]] &&
      board[winCondition[0]] !== null
    ) winningBoard = true
  })

  return winningBoard
}

export const changeTile = (gameObject, tileIndex, newSymbol) => {
  if(gameObject.board[tileIndex] !== null) return
  gameObject.board[tileIndex] = newSymbol
}