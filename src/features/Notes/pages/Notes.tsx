import { Container } from '@mantine/core'
import NotesList from '../components/NotesList'
import { useNotes } from '../useNotes'

export function NotesContentPage() {
  const { notes } = useNotes()
  return (
    <Container size="lg" py="xl">
      <NotesList notes={notes} />
    </Container>
  )
}
