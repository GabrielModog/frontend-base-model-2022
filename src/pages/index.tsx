import { Container, createStyles, Stack, Text, Title } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: 'none'
  }
}))

export default function Home() {
  const { classes } = useStyles()
  return (
    <Container>
      <Stack>
        <Title>FRONTEND MODEL - NEXT.JS + ZUSTAND + MANTINE-UI</Title>
        <Text>
          <Link href="/notes" className={classes.link}>
            /Notes{' '}
          </Link>
          <br />
          Note app example: create, edit, remove
        </Text>
        <Text>
          <Link href="/counter" className={classes.link}>
            /Counter
          </Link>
          <br />
          Counter component example (with async increment)
        </Text>
      </Stack>
    </Container>
  )
}
