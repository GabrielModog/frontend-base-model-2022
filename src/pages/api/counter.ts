// API COUNTER MOCKUP
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { amount = 1 } = req.body
  await new Promise((resolve) => setTimeout(resolve, 400))
  res.json({ data: amount })
}
