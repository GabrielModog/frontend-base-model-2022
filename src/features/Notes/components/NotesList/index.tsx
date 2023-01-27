import { SimpleGrid } from '@mantine/core'
import Note from '@/features/Notes/components/Note'
import type { NoteProps } from '@/features/Notes/Notes.types'

export default function NotesList({ notes }: { notes: NoteProps[] }) {
  return (
    <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </SimpleGrid>
  )
}
