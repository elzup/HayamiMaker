const {
  NODE_ENV,
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_SERVER_KEY,
  REACT_APP_ENCRYPT_KEY,
} = process.env

const isDev = NODE_ENV === 'development'

const configDevelopment = {
  admin: {
    name: 'admin',
    countMax: 100,
  },
}
const configProduction = {
  admin: {
    name: 'proadmin',
    countMax: 100,
  },
}

console.log(REACT_APP_FIREBASE_DATABASE_URL)

const config = {
  isDev,
  tabBarHeight: 40,
  firebase: {
    apiKey: REACT_APP_FIREBASE_API_KEY || '',
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN || '',
    databaseURL: REACT_APP_FIREBASE_DATABASE_URL || '',
    projectId: REACT_APP_FIREBASE_PROJECT_ID || '',
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '',
    serverKey: REACT_APP_FIREBASE_SERVER_KEY || '',
  },
  clockIntervalMs: 5000,
  encryptKey: REACT_APP_ENCRYPT_KEY || '',
  concrete: {},
  ...(isDev ? configDevelopment : configProduction),
}

export const routes = {
  login: '/login',
  menu: '/menu',
}

export default config
