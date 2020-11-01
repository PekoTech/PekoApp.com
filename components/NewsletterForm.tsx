import { useState, ChangeEvent, FormEvent } from 'react'
import clsx from 'clsx'

import styles from './NewsletterForm.module.scss'

export default function NewsletterForm() {
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
    console.log(form) // stub
  }

  return (
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
  )
}
