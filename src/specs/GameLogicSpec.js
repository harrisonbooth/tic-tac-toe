var assert = require("assert")

var checkWin = function (gameObject) {
  var board = gameObject.board
  var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  var winningBoard = false

  winConditions.forEach((winCondition) => {
    if(
      board[winCondition[0]] === board[winCondition[1]] &&
      board[winCondition[1]] === board[winCondition[2]] &&
      board[winCondition[0]] !== null
    ) winningBoard = true
  })

  return winningBoard
}

describe("Game logic functions", function() {
  var losingBoard = ["X", "A", "B", "O", "C", "D", "E", "F", "G"]
  var winningBoard = ["X", "X", "X", "O", "C", "D", "E", "F", "G"]
  var nullBoard = [null, null, null, "O", "C", "D", "E", "F", "G"]

  it("should evaluate losing boards as nothing", function() {
    assert.equal(checkWin({board: losingBoard}), false)
  })

  it("should evaluate equal rows with nulls boards as nothing", function() {
    assert.equal(checkWin({board: nullBoard}), false)
  })

  it("should evaluate winning boards as true", function() {
    assert.equal(checkWin({board: winningBoard}), true)
  })
})

