const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
  if (!(arr instanceof Array))
    throw Error("'arr' parameter must be an instance of the Array!")

  if (arr.length === 0) return arr

  const resultArr = []

  const transformHelper = {
    '--discard-next': (idx) => {
      if (arr[idx + 1]) {
        arr.splice(idx, 2)
      }
    },
    '--discard-prev': (idx) => {
      if (arr[idx - 1]) {
        arr.splice(idx - 1, 2)
      }
    },
    '--double-next': (idx) => {
      if (arr[idx + 1]) {
        arr.splice(idx, 0, arr[idx + 1])
      }
    },
    '--double-prev': (idx) => {
      if (arr[idx - 1]) {
        arr.splice(idx, 0, arr[idx - 1])
      }
    },
  }

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === '--discard-next') {
      idx += 2
    } else if (arr[idx] === '--discard-prev') {
      resultArr.pop()
    } else if (arr[idx] === '--double-next') {
      if (arr[idx + 1]) resultArr.push(arr[idx + 1])
    } else if (arr[idx] === '--double-prev') {
      if (arr[idx - 1]) resultArr.push(arr[idx - 1])
    } else {
      resultArr.push(arr[idx])
    }
  }
  // const transformedArr = arr.slice(0)

  // arr.forEach((arrItem, idx) => {
  //   if (transformHelper[arrItem]) {
  //     transformHelper[arrItem](idx)
  //   }
  // })

  return resultArr
}

module.exports = {
  transform,
}
