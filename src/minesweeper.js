const { NotImplementedError } = require('../lib');

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
  const resultMatrix = [];
  for (let row = 0; row < matrix.length; row += 1) {
    const newRow = [];
    for (let col = 0; col < matrix[0].length; col += 1) {
      let minesCount = 0;

      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (i === row && j === col) {
            continue;
          }

          if (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
            if (matrix[i][j] === true) {
              minesCount++;
            }
          }

        }
      }
      newRow.push(minesCount);
    }
    resultMatrix.push(newRow);
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
