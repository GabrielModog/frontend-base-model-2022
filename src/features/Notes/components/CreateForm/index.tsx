import { createStyles, Badge, TextInput, Textarea, Stack, Button, Flex, Paper } from '@mantine/core'
import { useForm } from '@mantine/form'

import { useNotes } from '@/features/Notes/useNotes'
import { NoteProps } from '../../Notes.types'

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

export default function NoteCreateForm() {
  const { addNote } = useNotes()
  const { classes } = useStyles()

  const form = useForm({
    initialValues: {
      title: '',
      text: ''
    }
  })

  function handleSaveNote(values: any) {
    if (values.title.trim() === '' || values.text.trim() === '') return

    const note: NoteProps = {
      id: (Math.random() * Date.now()).toString(),
      title: values.title,
      text: values.title,
      createdAt: new Date().toString()
    }
    addNote(note)
  }

  return (
    <Paper
      bg="gray.4"
      shadow="xs"
      p="md"
      component="form"
      onSubmit={form.onSubmit((values) => handleSaveNote(values))}
    >
      <Stack justify="space-between" align="scretch">
        <TextInput
          className={classes.textInput}
          type="text"
          label="Title:"
          size="sm"
          variant="unstyled"
          {...form.getInputProps('title')}
        />

        <Textarea
          className={classes.textInput}
          label="Text Content:"
          size="sm"
          variant="unstyled"
          minRows={4}
          {...form.getInputProps('text')}
        />

        <Stack align="flex-start">
          <Flex align="center" justify="space-between" w="100%">
            <Badge>creating</Badge>
            <Button.Group>
              <Button type="submit" size="xs" color="green">
                Save
              </Button>
              <Button size="xs">Cancel</Button>
            </Button.Group>
          </Flex>
        </Stack>
      </Stack>
    </Paper>
  )
}
