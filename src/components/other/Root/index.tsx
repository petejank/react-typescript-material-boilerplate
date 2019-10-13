import React from 'react'
import {Router, Redirect, Switch} from 'react-router-dom'
import {MuiThemeProvider} from '@material-ui/core/styles'

import {CssBaseline} from 'components/shared'
import Route from 'components/other/Route'
import DashboardLayout from 'components/layout/DashboardLayout'
import UnsignedLayout from 'components/layout/UnsignedLayout'
import history from 'routing/routerHistory'
import routes from 'routing/routes'
import {useDispatch} from 'store'
import * as userActions from 'store/user/actions'
import * as userStorage from 'utils/userStorage'
import theme from 'utils/theme'

import useStyles from './styles'

const signedPaths = Object.values(routes.signed)
const unsignedPaths = Object.values(routes.unsigned)

const Root = () => {
  // Inject @global styles
  useStyles()

  // Simulate fetching of user data from localStorage
  const dispatch = useDispatch()
  const user = userStorage.get()
  if (user) {
    dispatch(userActions.set(user))
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route requiresAuth path={signedPaths} component={DashboardLayout} />
          <Route inaccessibleWithToken path={unsignedPaths} component={UnsignedLayout} />
          <Redirect to={routes.signed.dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default Root
