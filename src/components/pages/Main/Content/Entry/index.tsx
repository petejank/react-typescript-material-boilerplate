import React from 'react'
import {Avatar, Button, Card, CardHeader, CardMedia, CardActions, Typography} from 'components/shared'

import useStyles from './styles'

type Props = {
  id: number
  title: string
  image: string
  remove: (id: number) => void
}

const MainContentEntry = ({id, title, image, remove}: Props) => {
  const classes = useStyles()

  function onRemove() {
    remove(id)
  }

  return (
    <Card className={classes.wrapper} component="section">
      <CardHeader
        classes={{
          content: classes.headerContent
        }}
        avatar={<Avatar className={classes.avatar}>{title[0]}</Avatar>}
        title={
          <Typography noWrap component="h2" variant="subtitle2">
            {title}
          </Typography>
        }
      />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardActions disableSpacing>
        <Button onClick={onRemove}>Remove</Button>
      </CardActions>
    </Card>
  )
}

export default MainContentEntry
