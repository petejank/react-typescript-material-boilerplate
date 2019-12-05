import * as userStorage from 'utils/userStorage'
import {UserType} from 'types/user'
import {SetActionType} from './types'
import {ThunkResultType} from 'store/types'

export const USER_SET = 'USER:SET'
export const USER_REMOVE = 'USER:REMOVE'

export function set(user: UserType): SetActionType {
  return {
    type: USER_SET,
    user
  }
}

export function remove(): ThunkResultType<void> {
  return (dispatch) => {
    dispatch({type: USER_REMOVE})
    userStorage.clear()
  }
}
