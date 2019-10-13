import * as actions from './actions'
import * as userStorage from 'utils/userStorage'
import {UserStateType, RemoveActionType, SetActionType} from './types'

const defaultState = {
  email: null,
  token: null
}

export default (state: UserStateType = defaultState, action: RemoveActionType | SetActionType) => {
  switch (action.type) {
    case actions.USER_SET:
      return {
        ...action.user
      }
    case actions.USER_REMOVE:
      userStorage.clear()

      return {
        ...defaultState
      }
    default:
      return state
  }
}
