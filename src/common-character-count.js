const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0

  const arr1 = s1.split('')
  const arr2 = s2.split('')
  let matches = 0

  for (let i = 0; i < arr1.length; i++) {
    let idx = arr2.indexOf(arr1[i])
    if (idx !== -1) {
      matches++
      arr2.splice(idx, 1)
    }
  }
  return matches
}

module.exports = {
  getCommonCharacterCount,
}
