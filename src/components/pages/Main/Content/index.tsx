import React from 'react'
import {Container, Grid} from 'components/shared'
import Entry from './Entry'
import Loader from 'components/layout/Loader'

import {EntryType} from 'types/entry'

type Props = {
  entries: EntryType[] | null
  removeEntry: (id: number) => void
}

const MainContent = ({entries, removeEntry}: Props) => {
  function renderContent() {
    if (!entries) {
      return <Loader />
    }

    return entries.map(({id, title, url}) => (
      <Grid item key={id} md={4} xs={12}>
        <Entry id={id} title={title} image={url} remove={removeEntry} />
      </Grid>
    ))
  }

  return (
    <Container navbar component="main">
      <Grid container spacing={2}>
        {renderContent()}
      </Grid>
    </Container>
  )
}

export default MainContent
