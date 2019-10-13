import React, {useState, useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import AppBar from './AppBar'
import SideBar from './SideBar'
import MainContainer from 'components/pages/Main'
import routes from 'routing/routes'
import theme from 'utils/theme'

import useStyles from './styles'

const DashboardLayout = () => {
  const classes = useStyles()
  const [sidebarMobileOpen, setMobileSidebarOpen] = useState(false)

  function toggleMobileSidebar() {
    setMobileSidebarOpen(!sidebarMobileOpen)
  }

  function onWindowResize() {
    if (window.innerWidth >= theme.breakpoints.values.md) {
      setMobileSidebarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    return () => window.removeEventListener('resize', onWindowResize)
  }, [])

  return (
    <div className={classes.wrapper}>
      <AppBar toggleMobileSidebar={toggleMobileSidebar} />
      <SideBar mobileOpen={sidebarMobileOpen} toggleMobileSidebar={toggleMobileSidebar} />
      <Switch>
        <Route exact path={routes.signed.dashboard} component={MainContainer} />
        <Redirect to={routes.signed.dashboard} />
      </Switch>
    </div>
  )
}

export default DashboardLayout
