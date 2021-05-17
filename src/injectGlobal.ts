import 'moment/locale/ja'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
  'Noto Sans Japanese', 'ヒラギノ角ゴ ProN W3', Meiryo, sans-serif;
  margin: 0;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

td {
  text-align: center;
}

* {
  cursor:'pointer'
}
`
