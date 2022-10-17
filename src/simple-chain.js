const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value !== undefined ? `( ${value} )` : '( )')
    return this
  },
  removeLink(position) {
    if (
      typeof position === 'number' &&
      0 < position &&
      position < this.getLength() &&
      (position ^ 0) === position
    ) {
      this.chain.splice(position - 1, 1)
      return this
    } else {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let finishedChain = this.chain.join('~~')
    this.chain = []
    return finishedChain
  },
}

module.exports = {
  chainMaker,
}
