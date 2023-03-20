import { NoteContentPage } from '@/features/Notes'
import { useNotes } from '@/features/Notes/useNotes'
import { Container } from '@mantine/core'
import { useRouter } from 'next/router'

export default function NotePage() {
  return (
    <Container size="sm" py="md" mt="lg">
      <NoteContentPage />
    </Container>
  )
}
