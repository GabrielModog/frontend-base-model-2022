import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core'
import type { NoteProps } from '@/features/Notes/Notes.types'

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`
  },

  body: {
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0
    }
  }
}))

export default function Note({ id, text }: NoteProps) {
  const { classes } = useStyles()
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <div>
          <Text size="sm">{id}</Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content}>{text}</div>
      </TypographyStylesProvider>
    </Paper>
  )
}
