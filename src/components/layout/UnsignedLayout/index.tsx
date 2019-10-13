import React from 'react'
import {Container} from 'components/shared'
import {Route, Switch, Redirect} from 'react-router-dom'

import SignInContainer from 'components/pages/SignIn'
import routes from 'routing/routes'

const UnsignedLayout = () => {
  return (
    <Container maxWidth="xs">
      <Switch>
        <Route exact path={routes.unsigned.signin} component={SignInContainer} />
        <Redirect to={routes.unsigned.signin} />
      </Switch>
    </Container>
  )
}

export default UnsignedLayout
