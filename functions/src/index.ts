/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/no-extraneous-dependencies */

// import { Logging } from '@google-cloud/logging'

import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import 'firebase-functions/lib/logger/compat'

const fbapp = admin.initializeApp()
const db = fbapp.database()

const auth = async (content: string | undefined, deviceId: string) => {
  const device = (await db.ref(`/device-token/${deviceId}`).once('value')).val()

  return device && content === device.token
}

exports.log = functions.https.onRequest(async (req, res) => {
  res.status(200).end()
})
