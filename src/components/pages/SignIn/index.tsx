import React from 'react'

import SignInContent from './Content'
import * as userActions from 'store/user/actions'
import * as userStorage from 'utils/userStorage'
import {useDispatch} from 'store'

const SignInContainer = () => {
  const dispatch = useDispatch()

  function authenticate(email: string, remember: boolean) {
    // Simulate token generation
    const authData = {
      email,
      token: Math.random()
        .toString(36)
        .substr(2)
    }

    if (remember) {
      userStorage.save(authData)
    }

    dispatch(userActions.set(authData))
  }

  return <SignInContent authenticate={authenticate} />
}

export default SignInContainer
