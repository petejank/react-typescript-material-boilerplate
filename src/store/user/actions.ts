import {UserType} from 'types/user'
import {SetActionType, RemoveActionType} from './types'

export const USER_SET = 'USER:SET'
export const USER_REMOVE = 'USER:REMOVE'

export function set(user: UserType): SetActionType {
  return {
    type: USER_SET,
    user
  }
}

export function remove(): RemoveActionType {
  return {
    type: USER_REMOVE
  }
}
