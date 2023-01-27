import { Container } from '@mantine/core'
import NotesList from './components/NotesList'
import { NoteProps } from './Notes.types'

const Mock: NoteProps[] = [
  {
    id: 'ek2w3r42',
    text: 'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    createdAt: '2023-01-27'
  },
  {
    id: 'ek2w3c42',
    text: 'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    createdAt: '2023-01-27'
  }
]

export function Notes() {
  return (
    <Container size="lg" py="xl">
      <NotesList notes={Mock} />
    </Container>
  )
}
