const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n < 10) return n;
  if (n === 10) return 1;
  const arr = n.toString().split('');

  let index = 0;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      index = i - 1;
    }
  }
  if (index === 0) return Number(arr.slice(1).join(''));
  if (index > 0) {
    let leftPart = arr.slice(0, index).join('');
    let rightPart = arr.slice(index + 1).join('');
    return Number(leftPart + rightPart);
  };
}

module.exports = {
  deleteDigit
};
