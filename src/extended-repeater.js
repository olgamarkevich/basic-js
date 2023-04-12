const { NotImplementedError } = require('../extensions/index.js');

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
 * repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let stringNew = '';

  for (i = 0; i < options.repeatTimes; i++) {
    stringNew += str;

    for (j = 0; j < options.additionRepeatTimes; j++) {
      stringNew += options.addition;
      if (j != options.additionRepeatTimes - 1) {
        stringNew += options.additionSeparator;
      }
    }

    if (i != options.repeatTimes - 1) {
      stringNew += options.separator;
    }
  }

  return stringNew;
}

module.exports = {
  repeater,
};
