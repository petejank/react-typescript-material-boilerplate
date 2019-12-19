import React, {useState, useRef} from 'react'

import {
  AppBar as MuiAppBar,
  Button,
  Container,
  Hidden,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Icon,
  IconButton
} from 'components/shared'
import * as userActions from 'store/user/actions'
import {useDispatch} from 'store'

import useStyles from './styles'

type Props = {
  toggleMobileSidebar: () => void
}

const AppBar = ({toggleMobileSidebar}: Props) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const menuAnchorRef = useRef(null)

  function openMenu() {
    setOpen(true)
  }

  function closeMenu() {
    setOpen(false)
  }

  function onLogout() {
    closeMenu()
    dispatch(userActions.remove())
  }

  return (
    <MuiAppBar className={classes.wrapper} position="absolute">
      <Container padded={false} component="div">
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarLeft}>
            <Hidden lgUp>
              <IconButton color="inherit" onClick={toggleMobileSidebar}>
                <Icon type="Menu" />
              </IconButton>
            </Hidden>
            <Typography component="h1" variant="h6">
              Dashboard
            </Typography>
          </div>
          <Button ref={menuAnchorRef} color="inherit" onClick={openMenu}>
            John Smith
            <Icon type="AccountCircle" margin="sm" />
          </Button>
        </Toolbar>
        <Menu keepMounted open={!!open} anchorEl={menuAnchorRef.current} onClose={closeMenu}>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      </Container>
    </MuiAppBar>
  )
}

export default AppBar
