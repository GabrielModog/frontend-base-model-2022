import create from 'zustand'
import { updateCountAsync } from './api/Counter.api'
import { CounterStore } from './Counter.types'

export const useCounter = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  descrement: () => set((state) => ({ count: state.count - 1 })),
  insertValue: (value: number) => set((state) => ({ count: state.count + value })),
  asyncIncrement: async () => {
    const [error, amount] = await updateCountAsync({ amount: 1 })
    console.log(amount)
    set((state) => ({ count: state.count + Number(amount) }))
  }
}))
