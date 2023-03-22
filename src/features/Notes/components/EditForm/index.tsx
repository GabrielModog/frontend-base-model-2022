import {
  createStyles,
  Badge,
  TextInput,
  Textarea,
  Stack,
  Button,
  Flex,
  Paper,
  Modal
} from '@mantine/core'

import { useNotes } from '@/features/Notes/useNotes'
import { useRouter } from 'next/router'
import { useDisclosure } from '@mantine/hooks'
import { useForm } from '@mantine/form'

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

export default function NoteEditForm() {
  const [opened, { open, close }] = useDisclosure(false)
  const { notes, selected, unseleactNote, updateNote, removeNote } = useNotes()
  const router = useRouter()
  const { query } = router
  const { classes } = useStyles()

  const note = Object.keys(selected).length !== 0 ? selected : notes.find((n) => n.id == query.id)
  const { id, text, title } = note!

  const form = useForm({
    initialValues: {
      title,
      text
    }
  })

  function handleUnslectNote() {
    unseleactNote()
    router.push('/notes')
  }

  function handleSaveNote(values: any) {
    updateNote(id as string, { id, text: values.text, title: values.title } as any)
    router.push('/notes')
  }

  function handleRemoveNote() {
    removeNote(id as string)
    router.push('/notes')
  }

  return (
    <Paper
      bg="gray.4"
      shadow="xs"
      p="md"
      component="form"
      onSubmit={form.onSubmit((values) => handleSaveNote(values))}
    >
      <Modal opened={opened} onClose={close} title="Delete Note?" withCloseButton={false} centered>
        <Flex align="center" justify="center">
          <Button size="xs" color="red" mx="md" w="100%" onClick={handleRemoveNote}>
            Yes
          </Button>
          <Button size="xs" color="blue" mx="md" w="100%" onClick={close}>
            Cancel
          </Button>
        </Flex>
      </Modal>
      <Stack justify="space-between" align="scretch">
        <TextInput
          className={classes.textInput}
          type="text"
          defaultValue={title}
          label="Title:"
          size="sm"
          variant="unstyled"
          {...form.getInputProps('title')}
        />

        <Textarea
          className={classes.textInput}
          defaultValue={text}
          label="Text Content:"
          size="sm"
          variant="unstyled"
          minRows={4}
          {...form.getInputProps('text')}
        />

        <Stack align="flex-start">
          <Flex align="center" justify="space-between" w="100%">
            <Badge>{selected.id == id ? 'editing' : 'in progress'}</Badge>
            <Button.Group>
              <Button type="submit" size="xs" color="green">
                Save
              </Button>
              <Button size="xs" onClick={handleUnslectNote}>
                Cancel
              </Button>
            </Button.Group>
            <Button size="xs" color="red" onClick={open}>
              Delete
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Paper>
  )
}
