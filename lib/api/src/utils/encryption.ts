import * as aesjs from 'aes-js'
import * as crypto from 'crypto'
const superAdminKey = [3, 5, 1, 2, 3, 12, 14, 12, 20, 7, 6, 4, 8, 10, 16, 32]
const vaultKey = [3, 5, 1, 2, 7, 12, 14, 23, 20, 7, 6, 4, 28, 10, 16, 32]
const encryptString = (val: string) => {
  const textBytes = aesjs.utils.utf8.toBytes(val)
  const aesCtr = new aesjs.ModeOfOperation.ctr(superAdminKey, new aesjs.Counter(5))
  const encryptedBytes = aesCtr.encrypt(textBytes)
  return aesjs.utils.hex.fromBytes(encryptedBytes)
}
const decryptString = (encrypted: string) => {
  const encryptedBytes = aesjs.utils.hex.toBytes(encrypted)
  const aesCtr = new aesjs.ModeOfOperation.ctr(superAdminKey, new aesjs.Counter(5))
  const decryptedBytes = aesCtr.decrypt(encryptedBytes)
  return aesjs.utils.utf8.fromBytes(decryptedBytes)
}

const vaultEncryptString = (val: string) => {
  const textBytes = aesjs.utils.utf8.toBytes(val)
  const aesCtr = new aesjs.ModeOfOperation.ctr(vaultKey, new aesjs.Counter(5))
  const encryptedBytes = aesCtr.encrypt(textBytes)
  return aesjs.utils.hex.fromBytes(encryptedBytes)
}
const vaultDecryptString = (encrypted: string) => {
  const encryptedBytes = aesjs.utils.hex.toBytes(encrypted)
  const aesCtr = new aesjs.ModeOfOperation.ctr(vaultKey, new aesjs.Counter(5))
  const decryptedBytes = aesCtr.decrypt(encryptedBytes)
  return aesjs.utils.utf8.fromBytes(decryptedBytes)
}

/**
 * Encrypt data using AES Cipher (CBC) with 128 bit key
 *
 * @param type workingKey -password shared by AuthBridge
 * @param type iv - initialization vector
 * @param type plainText - data to encrypt
 * @return encrypted data in base64 encoding
 */
const encryptKyc = (plainText: string) => {
  const iv = crypto.randomBytes(16)
  const hash = crypto.createHash('sha512')
  const dataKey = hash.update('India@2608', 'utf-8')
  const genHash = dataKey.digest('hex')
  const key = genHash.substring(0, 16)
  const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(key), iv)
  let requestData = cipher.update(plainText, 'utf-8', 'base64')
  requestData += cipher.final('base64') + ':' + Buffer.from(iv).toString('base64')
  return requestData
}

/**
 * Decrypt data using AES Cipher (CBC) with 128 bit key
 *
 * @param type workingkey - password shared by AuthBridge
 * @param type encText - data to be decrypted in base64 encoding
 * @return decrypted data
 */
const decryptKyc = (encText: string) => {
  const m = crypto.createHash('sha512')
  const datakey = m.update('India@2608', 'utf-8')
  const genHash = datakey.digest('hex')
  const key = genHash.substring(0, 16)
  const result = encText.split(':')
  const iv = Buffer.from(result[1], 'base64')
  const decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(key), iv)
  let decoded = decipher.update(result[0], 'base64', 'utf8')
  decoded += decipher.final('utf8')
  return decoded
}

export { encryptString, decryptString, vaultDecryptString, vaultEncryptString, encryptKyc, decryptKyc }
