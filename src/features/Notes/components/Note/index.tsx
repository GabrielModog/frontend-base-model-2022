import { createStyles, Text, Badge, TextInput, Textarea, Stack, Button, Flex } from '@mantine/core'

import type { NoteProps } from '@/features/Notes/Notes.types'
import { useNotes } from '@/features/Notes/useNotes'
import { useRouter } from 'next/router'

export default function Note({ id, title, text }: NoteProps) {
  const { selectNote } = useNotes()
  const router = useRouter()

  function handleSelectNoteOnClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    selectNote(id)
    router.push(`/notes/${id}`)
  }

  return (
    <Stack justify="space-between" align="scretch" onClick={handleSelectNoteOnClick}>
      <Text fw="bold" size="sm">
        {title}
      </Text>

      <Text>{text}</Text>

      <Stack align="flex-start">
        <Flex align="center" justify="space-between" w="100%">
          <Badge>in progress</Badge>
        </Flex>
      </Stack>
    </Stack>
  )
}
