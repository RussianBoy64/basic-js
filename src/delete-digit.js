const { NotImplementedError } = require('../extensions/index.js')

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
  const arr = n.toString().split('')
  let resultArr = []

  for (let i = 0; i < arr.length; i++) {
    let filteredArr = arr.filter((arrItem, idx) => {
      if (idx !== i) {
        return arrItem
      }
    })
    resultArr.push(+filteredArr.join(''))
  }

  return Math.max(...resultArr)
}

module.exports = {
  deleteDigit,
}
