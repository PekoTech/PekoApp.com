import { Client } from 'pg'
import { NextApiRequest, NextApiResponse } from 'next'

export const client = new Client()

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const { email, first_name, last_name } = req.body
      await client.query(
        'INSERT INTO leads(email, first_name, last_name) VALUES($1, $2, $3)',
        [email, first_name, last_name]
      )
      return res.status(204).send('')
    }
  } catch (error) {
    return res.status(400).send({ error })
  }
}
