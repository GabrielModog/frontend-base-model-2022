import { ApiCall } from '@/types/api-call'

export const updateCountAsync: ApiCall<{ amount: number }[], { amount?: number }> = async (
  payload
) => {
  try {
    const response = await fetch('/api/counter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: payload!.amount || 1 })
    })
    const result = await response.json()

    return [null, result.data]
  } catch (error) {
    return [{ message: 'error on increment count' }, null]
  }
}
