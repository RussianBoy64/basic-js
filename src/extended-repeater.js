const { NotImplementedError } = require('../extensions/index.js')

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
  const rpt = options.repeatTimes !== undefined ? options.repeatTimes : 1
  const addRpt =
    options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1

  const arr = new Array(rpt).fill(str)

  const additionArr = new Array(addRpt).fill(
    options.addition !== undefined ? `${options.addition}` : ''
  )

  const additionSeparator =
    options.additionSeparator !== undefined ? options.additionSeparator : '|'

  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${arr[i]}${additionArr.join(`${additionSeparator}`)}`
  }

  const separator = options.separator !== undefined ? options.separator : '+'
  return arr.join(`${separator}`)
}

module.exports = {
  repeater,
}
