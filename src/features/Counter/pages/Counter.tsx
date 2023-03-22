import { Button, Container, Flex, Input, Paper, Stack, Title } from '@mantine/core'
import { useCounter } from '../useCounter'

export function CounterContentPage() {
  const { count, increment, descrement, asyncIncrement } = useCounter()
  return (
    <Container size="sm">
      <Stack align="center">
        <Paper>
          <Title>{count}</Title>
        </Paper>
        <Flex justify="space-between">
          <Button onClick={descrement} mx="sm">
            Decrement
          </Button>
          <Button onClick={increment} mx="sm">
            Increment
          </Button>
        </Flex>
        <Flex>
          <Button onClick={asyncIncrement}>Async Increment</Button>
        </Flex>
        <Paper>
          <Flex>
            <Input mx="sm" />
            <Button>Custom Increment</Button>
          </Flex>
        </Paper>
      </Stack>
    </Container>
  )
}
