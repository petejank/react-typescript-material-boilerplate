import React from 'react'

import {CircularProgress} from 'components/shared'

import useStyles from './styles'

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper} data-testid="loader">
      <CircularProgress />
    </div>
  )
}

export default Loader
