const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length
  const columns = matrix[0].length
  const gameField = Array.from(Array(rows), () => new Array(columns))

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let mines = 0

      if (matrix[i][j - 1] === true) mines++
      if (matrix[i][j + 1] === true) mines++

      if (i > 0) {
        for (let t = j - 1; t < j + 2; t++) {
          if (matrix[i - 1][t] === true) mines++
        }
      }

      if (i < rows - 1) {
        for (let b = j - 1; b < j + 2; b++) {
          if (matrix[i + 1][b] === true) mines++
        }
      }

      gameField[i][j] = mines
    }
  }
  return gameField
}

module.exports = {
  minesweeper,
}
