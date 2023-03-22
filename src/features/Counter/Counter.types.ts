export interface CounterProps {
  count: number
}

export interface CounterStore {
  count: number
  increment: () => void
  descrement: () => void
  insertValue: (value: number) => void
  asyncIncrement: () => Promise<void>
}
