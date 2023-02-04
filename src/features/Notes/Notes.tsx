import { Container } from '@mantine/core'
import NotesList from './components/NotesList'
import { NoteProps } from './Notes.types'
import { useNotes } from './useNotes'

export function Notes() {
  const { notes } = useNotes()
  return (
    <Container size="lg" py="xl">
      <NotesList notes={notes} />
    </Container>
  )
}
