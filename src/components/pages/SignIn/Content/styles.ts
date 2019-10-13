import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  signInWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8)
  },
  signInAvatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1)
  },
  signInForm: {
    marginTop: theme.spacing(1),
    width: '100%'
  },
  signInSubmit: {
    margin: theme.spacing(3, 0, 2)
  }
}))
