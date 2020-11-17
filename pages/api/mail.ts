import { NextApiRequest, NextApiResponse } from 'next'
import pg from 'pg'

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const pool = new pg.Pool()
      const { email, first_name, last_name } = req.body
      console.log('before insert')
      await pool.query(
        'INSERT INTO leads(email, first_name, last_name) VALUES($1, $2, $3)',
        [email, first_name, last_name]
      )
      console.log('after insert')
      await pool.end()
      return res.status(204).send({ message: 'Thanks!' })
    }
  } catch (error) {
    return res.status(400).send({ error })
  }
}
