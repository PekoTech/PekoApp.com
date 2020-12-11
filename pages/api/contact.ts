import { NextApiRequest, NextApiResponse } from 'next'
import pg from 'pg'

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const pool = new pg.Pool()
      const { email, first_name, message } = req.body
      await pool.query(
        'INSERT INTO contact(email, first_name, message) VALUES($1, $2, $3)',
        [email, first_name, message]
      )
      await pool.end()
      return res.status(201).send({ message: 'Thanks!' })
    }
  } catch (error) {
    return res.status(400).send({ error })
  }
}
