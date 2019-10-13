import axios from 'axios'

import {EntryType} from 'types/entry'

const MAX_ENTRIES_LENGTH = 9
const URL = `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${MAX_ENTRIES_LENGTH}`

export function get(): Promise<EntryType[]> {
  return axios.get(URL).then((res) => res.data)
}
