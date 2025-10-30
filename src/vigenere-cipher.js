const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  direction(result) {
    if (!this.isDirect) {
      return result.reverse().join('');
    }
    return result.join('');
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      return "Incorrect arguments!";
    }
    let messageArray = message.toUpperCase().split('');
    let keyUppC = key.toUpperCase();
    let keyIndex = 0;
    let result = [];

    for (let i = 0; i < messageArray.length; i += 1) {
      if (messageArray[i] >= 'A' && messageArray[i] <= 'Z') {
        let mCode = messageArray[i].charCodeAt(0) - 65;
        let kCode = keyUppC[keyIndex % keyUppC.length].charCodeAt(0) - 65;
        let newCode = (mCode + kCode) % 26;
        result.push(String.fromCharCode(newCode + 65));
        keyIndex += 1;
      } else {
        result.push(messageArray[i]);
      }
    }

    return this.direction(result);
  }

  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      return "Incorrect arguments!";
    }
    let messageArray = message.toUpperCase().split('');
    let keyUppC = key.toUpperCase();
    let keyIndex = 0;
    let result = [];

    for (let i = 0; i < messageArray.length; i += 1) {
      if (messageArray[i] >= 'A' && messageArray[i] <= 'Z') {
        let mCode = messageArray[i].charCodeAt(0) - 65;
        let kCode = keyUppC[keyIndex % keyUppC.length].charCodeAt(0) - 65;
        let newCode = (mCode - kCode + 26) % 26;
        result.push(String.fromCharCode(newCode + 65));
        keyIndex += 1;
      } else {
        result.push(messageArray[i]);
      }
    }

    return this.direction(result);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
