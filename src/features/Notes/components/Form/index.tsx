import { createStyles, Badge, TextInput, Textarea, Stack, Button, Flex, Paper } from '@mantine/core'

import type { NoteProps } from '@/features/Notes/Notes.types'
import { useNotes } from '@/features/Notes/useNotes'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  body: {
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm
  },
  content: {
    paddingTop: '2rem',
    '& > p:last-child': {
      marginBottom: 0
    }
  },
  textInput: {
    '& textarea': {
      color: theme.colors.gray[7],
      background: theme.colors.gray[2],
      borderRadius: 4,
      padding: '6px'
    },
    '& input': {
      color: theme.colors.gray[7],
      background: theme.colors.gray[2],
      borderRadius: 4,
      padding: '6px'
    },
    '& label': {
      color: theme.colors.dark[6]
    }
  }
}))

export default function NoteForm() {
  const { notes, selected, unseleactNote } = useNotes()
  const router = useRouter()
  const { query } = router
  const { classes } = useStyles()
  const note = Object.keys(selected).length !== 0 ? selected : notes.find((n) => n.id == query.id)
  const { id, text, title } = note!
  function handleUnslectNote() {
    unseleactNote()
    router.push('/notes')
  }
  return (
    <Paper bg="gray.4" shadow="xs" p="md">
      <Stack justify="space-between" align="scretch">
        <TextInput
          className={classes.textInput}
          type="text"
          defaultValue={title}
          label="Title:"
          size="sm"
          variant="unstyled"
        />

        <Textarea
          className={classes.textInput}
          defaultValue={text}
          label="Text Content:"
          size="sm"
          variant="unstyled"
          minRows={4}
        />

        <Stack align="flex-start">
          <Flex align="center" justify="space-between" w="100%">
            <Badge>{selected.id == id ? 'editing' : 'in progress'}</Badge>
            <Button.Group>
              <Button size="xs" color="green">
                Save
              </Button>
              <Button size="xs" onClick={handleUnslectNote}>
                Cancel
              </Button>
            </Button.Group>
          </Flex>
        </Stack>
      </Stack>
    </Paper>
  )
}
