import React, {useEffect, useState} from 'react'

import MainContent from './Content'
import * as photosApi from 'api/entries'
import {EntryType} from 'types/entry'

const MainContainer = () => {
  const [entries, setEntries] = useState<EntryType[] | null>(null)

  function removeEntry(removedId: number) {
    setEntries(entries!.filter(({id}) => id !== removedId))
  }

  useEffect(() => {
    photosApi.get().then((entriesData) => {
      setEntries(entriesData)
    })
  }, [])

  return <MainContent entries={entries} removeEntry={removeEntry} />
}

export default MainContainer
