const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  str = String(str);

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator !== undefined ? String(options.separator) : '+';
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  let additionStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  let result = Array(repeatTimes).fill(str + additionStr).join(separator);

  return result;

}

module.exports = {
  repeater
};
