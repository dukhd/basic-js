const { NotImplementedError } = require('../lib');

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
  if (!Array.isArray(members)) return false;
  const filteredArray = members.filter((value) => typeof value === 'string');
  const trimedArray = [];
  for (let i = 0; i < filteredArray.length; i += 1) {
    trimedArray.push(filteredArray[i].trim().toUpperCase());
  }
  const sortedArray = trimedArray.sort();

  let result = '';
  for (let i = 0; i < sortedArray.length; i += 1) {
    result += sortedArray[i][0];
  }

  if (result === '') return false;
  return result;
}

module.exports = {
  createDreamTeam
};
