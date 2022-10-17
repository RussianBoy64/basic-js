const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array) || members.every(validateMember)) return false

  const membersArr = members.filter((memberName) => {
    return typeof memberName === 'string'
  })
  const teamName = membersArr
    .map((member) => member.trim().slice(0, 1).toUpperCase())
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join('')

  return teamName
}

function validateMember(member) {
  return typeof member !== 'string'
}

module.exports = {
  createDreamTeam,
}
