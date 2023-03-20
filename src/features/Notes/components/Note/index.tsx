import { Text, Badge, Stack, Button, Flex, createStyles } from '@mantine/core'
import { useRouter } from 'next/router'

import type { NoteProps } from '@/features/Notes/Notes.types'
import { useNotes } from '@/features/Notes/useNotes'

const useStyles = createStyles((theme) => ({
  main: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colors.gray[5],
      transition: '350ms'
    }
  }
}))

export default function Note({ id, title, text, folder }: NoteProps) {
  const { classes } = useStyles()
  const { selectNote, moveToAnotherFolder } = useNotes()
  const router = useRouter()

  function handleSelectNoteOnClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    selectNote(id)
    router.push(`/notes/${id}`)
  }

  function handleMarkAsFinished(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    moveToAnotherFolder(id, 'FINISHED')
  }

  return (
    <Stack
      justify="space-between"
      align="scretch"
      onClick={handleSelectNoteOnClick}
      className={classes.main}
      p="md"
    >
      <Text fw="bold" size="sm">
        {title}
      </Text>

      <Text>{text}</Text>

      <Stack align="flex-start">
        <Flex align="center" justify="space-between" w="100%">
          <Badge>{folder}</Badge>
          {folder !== 'FINISHED' && (
            <Button size="xs" onClick={handleMarkAsFinished}>
              Mark as Finished
            </Button>
          )}
        </Flex>
      </Stack>
    </Stack>
  )
}
