import * as localStorage from '../localStorage'
import {UserType} from 'types/user'
import {UserDataType} from './types'

const USER_STORAGE_KEY = 'user'

export function save(userData: UserDataType) {
  localStorage.setItem(USER_STORAGE_KEY, userData)
}

export function get(): UserType {
  return localStorage.getItem(USER_STORAGE_KEY)
}

export function clear() {
  localStorage.removeItem(USER_STORAGE_KEY)
}
