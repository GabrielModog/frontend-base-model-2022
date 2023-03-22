import { Button, Container, createStyles, Modal, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import NoteCreateForm from '../components/CreateForm'
import NotesList from '../components/NotesList'
import { useNotes } from '../useNotes'

const useStyles = createStyles((theme) => ({
  floatButton: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
    transition: '350ms',
    '&:hover': {
      transform: 'translate(0, -5px)'
    }
  }
}))

export function NotesContentPage() {
  const [opened, { open, close }] = useDisclosure(false)
  const { classes } = useStyles()
  const { notes } = useNotes()
  return (
    <Container size="lg" py="xl">
      <NotesList notes={notes} />
      <Modal
        opened={opened}
        onClose={close}
        title={<Title size="md">Add Note</Title>}
        withCloseButton={false}
        centered
      >
        <NoteCreateForm />
      </Modal>
      <Button onClick={open} radius="xl" size="sm" uppercase className={classes.floatButton}>
        Create Note
      </Button>
    </Container>
  )
}
