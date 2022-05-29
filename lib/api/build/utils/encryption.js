"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptKyc = exports.encryptKyc = exports.vaultEncryptString = exports.vaultDecryptString = exports.decryptString = exports.encryptString = void 0;
var aesjs = __importStar(require("aes-js"));
var crypto = __importStar(require("crypto"));
var superAdminKey = [3, 5, 1, 2, 3, 12, 14, 12, 20, 7, 6, 4, 8, 10, 16, 32];
var vaultKey = [3, 5, 1, 2, 7, 12, 14, 23, 20, 7, 6, 4, 28, 10, 16, 32];
var encryptString = function (val) {
    var textBytes = aesjs.utils.utf8.toBytes(val);
    var aesCtr = new aesjs.ModeOfOperation.ctr(superAdminKey, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    return aesjs.utils.hex.fromBytes(encryptedBytes);
};
exports.encryptString = encryptString;
var decryptString = function (encrypted) {
    var encryptedBytes = aesjs.utils.hex.toBytes(encrypted);
    var aesCtr = new aesjs.ModeOfOperation.ctr(superAdminKey, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
};
exports.decryptString = decryptString;
var vaultEncryptString = function (val) {
    var textBytes = aesjs.utils.utf8.toBytes(val);
    var aesCtr = new aesjs.ModeOfOperation.ctr(vaultKey, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    return aesjs.utils.hex.fromBytes(encryptedBytes);
};
exports.vaultEncryptString = vaultEncryptString;
var vaultDecryptString = function (encrypted) {
    var encryptedBytes = aesjs.utils.hex.toBytes(encrypted);
    var aesCtr = new aesjs.ModeOfOperation.ctr(vaultKey, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
};
exports.vaultDecryptString = vaultDecryptString;
/**
 * Encrypt data using AES Cipher (CBC) with 128 bit key
 *
 * @param type workingKey -password shared by AuthBridge
 * @param type iv - initialization vector
 * @param type plainText - data to encrypt
 * @return encrypted data in base64 encoding
 */
var encryptKyc = function (plainText) {
    var iv = crypto.randomBytes(16);
    var hash = crypto.createHash('sha512');
    var dataKey = hash.update('India@2608', 'utf-8');
    var genHash = dataKey.digest('hex');
    var key = genHash.substring(0, 16);
    var cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(key), iv);
    var requestData = cipher.update(plainText, 'utf-8', 'base64');
    requestData += cipher.final('base64') + ':' + Buffer.from(iv).toString('base64');
    return requestData;
};
exports.encryptKyc = encryptKyc;
/**
 * Decrypt data using AES Cipher (CBC) with 128 bit key
 *
 * @param type workingkey - password shared by AuthBridge
 * @param type encText - data to be decrypted in base64 encoding
 * @return decrypted data
 */
var decryptKyc = function (encText) {
    var m = crypto.createHash('sha512');
    var datakey = m.update('India@2608', 'utf-8');
    var genHash = datakey.digest('hex');
    var key = genHash.substring(0, 16);
    var result = encText.split(':');
    var iv = Buffer.from(result[1], 'base64');
    var decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(key), iv);
    var decoded = decipher.update(result[0], 'base64', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
};
exports.decryptKyc = decryptKyc;
