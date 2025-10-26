const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) return '';
  const matches = str.match(/(.)\1*/g);
  let result = '';
  for (let i = 0; i < matches.length; i += 1) {
    const count = matches[i].length;
    const char = matches[i][0];
    if (count === 1) result += char;
    if (count > 1) result += count + char;
  };
  return result;
}

module.exports = {
  encodeLine
};
