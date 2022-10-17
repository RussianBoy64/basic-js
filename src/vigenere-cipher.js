const { NotImplementedError } = require('../extensions/index.js')

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
  constructor(direct = true) {
    this.isMachineDirect = direct
  }

  encrypt(message, key) {
    if (message && key) {
      let encryptedMessage = ''
      let keyIdx = 0

      for (let i = 0; i < message.length; i++) {
        const messageChar = message.toUpperCase().charCodeAt(i)
        const keyChar = key.toUpperCase().charCodeAt(keyIdx % key.length)
        if (64 < messageChar && messageChar < 91) {
          let charNum = messageChar + keyChar - 65
          charNum = charNum > 90 ? charNum - 26 : charNum
          encryptedMessage += String.fromCharCode(charNum)
          keyIdx++
        } else {
          encryptedMessage += String.fromCharCode(messageChar)
        }
      }

      if (!this.isMachineDirect) {
        encryptedMessage = encryptedMessage.split('').reverse().join('')
      }

      return encryptedMessage
    } else {
      throw new Error('Incorrect arguments!')
    }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {
      let message = ''
      let keyIdx = 0

      for (let i = 0; i < encryptedMessage.length; i++) {
        const encMessageChar = encryptedMessage.toUpperCase().charCodeAt(i)
        const keyChar = key.toUpperCase().charCodeAt(keyIdx % key.length)
        if (64 < encMessageChar && encMessageChar < 91) {
          let charNum = encMessageChar - keyChar + 65
          charNum = charNum < 65 ? charNum + 26 : charNum
          message += String.fromCharCode(charNum)
          keyIdx++
        } else {
          message += String.fromCharCode(encMessageChar)
        }
      }

      if (!this.isMachineDirect) {
        message = message.split('').reverse().join('')
      }

      return message
    } else {
      throw new Error('Incorrect arguments!')
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
}
