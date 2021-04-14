import { NextApiRequest, NextApiResponse } from 'next'
import client from '@mailchimp/mailchimp_marketing/src'

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us1',
})

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, first_name, last_name } = req.body || {}
  try {
    if (req.method === 'POST') {
      await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
        email_address: email,
        status: 'pending',
        merge_fields: {
          FNAME: first_name,
          LNAME: last_name,
        },
      })
      return res.status(201).json({})
    }
  } catch (error) {
    console.log(error)
    const errorInfo = error.response.body
    if (errorInfo.title === 'Member Exists') {
      return res
        .status(400)
        .send({ error: `User with email ${email} already exists.` })
    }
    return res.status(400).send({ error: errorInfo.title })
  }
}
