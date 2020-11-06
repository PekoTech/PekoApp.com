import { useState, ChangeEvent, FormEvent } from 'react'
import clsx from 'clsx'

import styles from './NewsletterForm.module.scss'

const MailUrl = 'https://peko-egg-email.herokuapp.com/'

enum FormState {
  Done,
  Error,
  Idle,
  Invalid,
  Loading,
}

type ApiError = {
  status: number
  message: string
}

export default function NewsletterForm() {
  const [state, setFormState] = useState<FormState>(FormState.Idle)
  const [error, setError] = useState<ApiError | null>(null)
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
  })

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    setFormState(FormState.Loading)
    fetch(MailUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.ok) {
        setFormState(FormState.Done)
      } else {
        setFormState(FormState.Error)
        setError({ status: res.status, message: res.statusText })
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={clsx(styles.form, 'lg:grid')}>
        <label className={styles.first}>
          First Name
          <input
            className={clsx(styles.input, 'mb-4')}
            id="first_name"
            name="first_name"
            type="text"
            placeholder="John"
            value={form.first_name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.last}>
          Last Name
          <input
            className={clsx(styles.input, 'mb-4')}
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Smith"
            value={form.last_name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.email}>
          Email
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <button
          className={clsx(styles.submit, 'mt-6 lg:col-span-2')}
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        <Message state={state} error={error} />
      </div>
    </>
  )
}

type MessageProps = {
  state: FormState
  error: ApiError
}

function Message({ state, error }: MessageProps) {
  let message = ''
  switch (state) {
    case FormState.Error:
      message = `Something went wrong while saving your profile. ${error.status}: ${error.message}`
      break
    case FormState.Loading:
      message = 'Loading...'
      break
    case FormState.Done:
      message = "Thanks! We'll be in touch soon."
      break
    default:
      return null
  }
  return <p>{message}</p>
}
