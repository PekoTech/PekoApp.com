import { NextApiRequest, NextApiResponse } from 'next'
import faunadb from 'faunadb'

const FEEDBACK_INDEX = 'signups_by_email'
const FEEDBACK_COLLECTION = 'mail'

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const db = faunadb.query
    const client = new faunadb.Client({
      secret: process.env.FAUNA_SECRET_KEY,
    })

    const { email, first_name, last_name } = req.query

    if (!email) {
      return res.status(400).json({
        message: 'Email not provided',
      })
    }

    const doesDocExist = await client.query(
      db.Exists(db.Match(db.Index(FEEDBACK_INDEX), email))
    )

    if (doesDocExist) {
      return res.status(400).json({ message: 'email exists' })
    }

    await client.query(
      db.Create(db.Collection(FEEDBACK_COLLECTION), {
        data: {
          email,
          first_name,
          last_name,
        },
      })
    )
    return res.status(200).json({ email, first_name, last_name })
  }
  return res.status(404).end()
}
