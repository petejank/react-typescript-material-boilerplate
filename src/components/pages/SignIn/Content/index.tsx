import React, {useState, SyntheticEvent} from 'react'

import {Avatar, Button, Checkbox, FormControlLabel, Icon, Typography, TextField} from 'components/shared'
import {ChangeEventType} from 'types/events'
import {ObjectType} from 'types/object'

import useStyles from './styles'

type Props = {
  authenticate: (email: string, remember: boolean) => void
}

const SignInContent = ({authenticate}: Props) => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const changeMap: ObjectType = {
    email: setEmail,
    password: setPassword,
    remember: setRemember
  }

  function changeInputState({target: {name, value, type}}: ChangeEventType, checked?: boolean) {
    changeMap[name](type === 'checkbox' ? checked : value)
  }

  function submit(e: SyntheticEvent) {
    e.preventDefault()
    authenticate(email, remember)
  }

  return (
    <div className={classes.signInWrapper}>
      <Avatar className={classes.signInAvatar}>
        <Icon type="LockOutlined" />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={submit} className={classes.signInForm}>
        <TextField
          autoFocus
          required
          fullWidth
          id="email"
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          label="E-mail"
          autoComplete="email"
          value={email}
          onChange={changeInputState}
        />
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          type="password"
          variant="outlined"
          margin="normal"
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={changeInputState}
        />
        <FormControlLabel
          control={<Checkbox value={remember} name="remember" color="primary" onChange={changeInputState} />}
          label="Remember me"
        />
        <Button
          fullWidth
          className={classes.signInSubmit}
          type="submit"
          variant="contained"
          color="primary"
          data-testid="sign-in-button"
        >
          Sign in
        </Button>
      </form>
    </div>
  )
}

export default SignInContent
