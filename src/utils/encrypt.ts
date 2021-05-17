import AES from 'crypto-js/aes'
import EncUTF8 from 'crypto-js/enc-utf8'
import _ from 'lodash'
import config from '../config'

const aesEncrypt = (text: string, key: string) =>
  AES.encrypt(text, key).toString()

const aesDecrypt = (text: string, key: string) =>
  AES.decrypt(text, key).toString(EncUTF8)

export const encrypt = _.partial(aesEncrypt, _, config.encryptKey)
export const decrypt = _.partial(aesDecrypt, _, config.encryptKey)
