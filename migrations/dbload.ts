/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
import { readFileSync } from 'fs'
import AES from 'crypto-js/aes'
import EncUTF8 from 'crypto-js/enc-utf8'
import _ from 'lodash'
import admin from 'firebase-admin'

const envs: Record<string, string> = {}
const { APP_ENCRYPT_KEY, APP_SA_FILEPATH } = envs

// eslint-disable-next-line import/no-dynamic-require
const serviceAccount = require(APP_SA_FILEPATH)

const envfile = process.env.ENV_FILE || '.env.development'
const data = readFileSync(envfile, 'utf8')

data
  .trim()
  .split('\n')
  .forEach(line => {
    const [k, v] = line.replace(/"/g, '').split('=')

    envs[k] = v
  })

const aesEncrypt = (text: string, key: string) =>
  AES.encrypt(text, key).toString()

const aesDecrypt = (text: string, key: string) =>
  AES.decrypt(text, key).toString(EncUTF8)

export const encrypt = _.partial(aesEncrypt, _, APP_ENCRYPT_KEY)
export const decrypt = _.partial(aesDecrypt, _, APP_ENCRYPT_KEY)

export async function createUserOnly(email: string, password: string) {
  await admin.auth().createUser({ email, password })
}

// const app = firebase.initializeApp(config)

const credential = admin.credential.cert(serviceAccount)

admin.initializeApp({ credential })
export const db = admin.database()
export { admin }
