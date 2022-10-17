const { NotImplementedError } = require('../extensions/index.js')

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
  if (str.length === 0) return ''
  const arr = str.split('')
  let count = 1
  let result = []

  arr.forEach((char, idx, currentArr) => {
    if (char === currentArr[idx + 1]) {
      count++
    } else {
      result.push(`${count === 1 ? '' : count}${char}`)
      count = 1
    }
  })

  return result.join('')
}

module.exports = {
  encodeLine,
}
