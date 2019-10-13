import {UserType} from 'types/user'

export type UserStateType = {
  email: string | null
  token: string | null
}

export type SetActionType = {
  type: 'USER:SET'
  user: UserType
}

export type RemoveActionType = {
  type: 'USER:REMOVE'
}
