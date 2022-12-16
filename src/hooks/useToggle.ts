import { useState } from 'react'

export default function useToggle(defaultValue: any) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value: any): void {
    if (typeof value === 'boolean') return setValue(value)

    setValue((currentValue: any) => !currentValue)
  }

  return [value, toggleValue]
}
