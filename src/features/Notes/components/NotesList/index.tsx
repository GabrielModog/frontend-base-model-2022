import { SimpleGrid, Paper } from '@mantine/core'
import Note from '@/features/Notes/components/Note'
import type { NoteProps } from '@/features/Notes/Notes.types'

export default function NotesList({ notes }: { notes: NoteProps[] }) {
  if (notes.length === 0) {
    return (
      <Paper bg="gray.4" shadow="xs" p="md">
        No notes yet...
      </Paper>
    )
  }
  return (
    <Paper bg="gray.4" shadow="xs" p="sm">
      <SimpleGrid cols={3} spacing="xl" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </SimpleGrid>
    </Paper>
  )
}
