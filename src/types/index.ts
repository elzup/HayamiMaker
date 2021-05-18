/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type ID = number

export type Item = {
  id: ID
  name: string
  url: string
}

export type Template = {
  id: ID
  name: string
  items: Item[]
}

export type Maching = {}

export type Table = {
  id: ID
  mirror: boolean
  templateR: ID
  templateV: ID
  cells: Cell[][]
}

export type Cell = {
  category: 'emp' | 'val' | 'non' | 'ox'
  val: number
  str: string
}
