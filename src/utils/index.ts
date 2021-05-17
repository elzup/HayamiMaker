import _ from 'lodash'
import moment from 'moment'

export const timeLabel = (timestamp: number) => {
  const m = moment(timestamp)

  return m.format(`YYYY/MM/DD HH:mm:ss (${m.fromNow()})`)
}

const genPasswordUnit = () =>
  Math.random()
    .toString(36)
    .slice(-8)

export const genPassword = () =>
  genPasswordUnit() + genPasswordUnit() + genPasswordUnit()

const tokenTable =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export const genToken = (n = 32) =>
  Array.from(Array(n))
    .map(() => tokenTable[Math.floor(Math.random() * tokenTable.length)])
    .join('')

export const unix = () => Math.floor(+new Date() / 1000)
