import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import ReactDOM from 'react-dom'

import App from './pages/App'
import configureStore from './store'

import * as serviceWorker from './serviceWorker'
import theme from './theme'

import { GlobalStyle } from './injectGlobal'

const { store, persistor } = configureStore()

const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <CssBaseline />
          <GlobalStyle />
          <MuiThemeProvider theme={theme}>
            <App />
          </MuiThemeProvider>
        </div>
      </PersistGate>
    </Provider>,
    root,
  )
}

serviceWorker.unregister()

// if (!config.isDev && 'serviceWorker' in navigator && navigator.serviceWorker) {
//   navigator.serviceWorker
//     .register('/firebase-messaging-sw.js')
//     .then(function(registration) {})
//     .catch(function(err) {
//       console.log('Service worker registration failed, error:', err)
//     })
// }
