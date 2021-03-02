import { NextApiRequest, NextApiResponse } from 'next'
import pg from 'pg'

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, first_name, last_name } = req.body || {}
  try {
    if (req.method === 'POST') {
      const pool = new pg.Pool()
      await pool.query(
        'INSERT INTO leads(email, first_name, last_name) VALUES($1, $2, $3)',
        [email, first_name, last_name]
      )
      await pool.end()
      return res.status(201).send({ message: 'Thanks!' })
    }
  } catch (error) {
    const message =
      error.code === '23505' ? `Email ${email} already exists.` : error.detail
    return res.status(400).send({ error: message })
  }
}
