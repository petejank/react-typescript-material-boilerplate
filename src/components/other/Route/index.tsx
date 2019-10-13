import React, {useEffect} from 'react'
import {Route as ReactRoute, RouteProps} from 'react-router-dom'
import useReactRouter from 'use-react-router'

import {useSelector} from 'store'
import routes from 'routing/routes'

type Props = RouteProps & {
  requiresAuth?: boolean
  inaccessibleWithToken?: boolean
}

const Route = (props: Props) => {
  const token = useSelector(({user: {token}}) => token)
  const {component: Component, requiresAuth, inaccessibleWithToken, ...rest} = props
  const {history} = useReactRouter()

  useEffect(() => {
    if (!token && requiresAuth) {
      history.push(routes.unsigned.signin)
    } else if (token && inaccessibleWithToken) {
      history.push(routes.signed.dashboard)
    }
  })

  if (!token && requiresAuth) return null
  if (token && inaccessibleWithToken) return null

  return <ReactRoute {...rest} component={Component} />
}

export default Route
