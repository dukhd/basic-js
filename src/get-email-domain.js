const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
 const emailToSplit = email.split("");
 let indexAt = 0;
 for (let i = 0; i < emailToSplit.length; i += 1) {
   if (emailToSplit[i] === '@') {
     indexAt = i;
   }
 }
  return email.slice(indexAt + 1);
}

module.exports = {
  getEmailDomain
};
