const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 * [1, 2, 3, [4, 5], 6, 7, [8, [9, 10]]]
 *  1, 0, 0,  1, 0
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr instanceof Array) {
      let depth = 0
      arr.forEach((arrItem) => {
        depth = Math.max(depth, this.calculateDepth(arrItem))
      })
      return 1 + depth
    } else {
      return 0
    }
  }
}

module.exports = {
  DepthCalculator,
}
