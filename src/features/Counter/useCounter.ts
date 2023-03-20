import create from 'zustand/react'
import { CounterStore } from './Counter.types'

export const useCounter = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  descrement: () => set((state) => ({ count: state.count + 1 })),
  insertValue: (value: number) => set((state) => ({ count: state.count + value }))
}))
