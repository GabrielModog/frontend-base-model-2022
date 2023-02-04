import { createStyles, Text, Badge, TextInput, Textarea, Stack } from '@mantine/core'

import type { NoteProps } from '@/features/Notes/Notes.types'
import { useNotes } from '@/features/Notes/useNotes'

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
      color: theme.colors.gray[7]
    },
    '& input': {
      color: theme.colors.gray[7]
    },
    '& label': {
      color: theme.colors.dark[6]
    }
  }
}))

export default function Note({ id, title, text, isSelected }: NoteProps) {
  const { selected, selectNote } = useNotes()
  const { classes } = useStyles()
  function handleSelectNoteOnClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    selectNote(id)
  }
  return (
    <Stack justify="space-between" align="scretch" onClick={handleSelectNoteOnClick}>
      {selected.id == id ? (
        <TextInput
          className={classes.textInput}
          type="text"
          defaultValue={title}
          label="Title:"
          size="sm"
          variant="unstyled"
        />
      ) : (
        <Text fw="bold" size="sm">
          {title}
        </Text>
      )}

      {selected.id == id ? (
        <Textarea
          className={classes.textInput}
          defaultValue={text}
          label="Text Content:"
          size="sm"
          variant="unstyled"
          minRows={4}
        />
      ) : (
        <Text>{text}</Text>
      )}
      <Stack align="flex-start">
        <Badge>{selected.id == id ? 'editing' : 'in progress'}</Badge>
      </Stack>
    </Stack>
  )
}
