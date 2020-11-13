import { useState, ChangeEvent, FormEvent, FocusEvent } from 'react'
import clsx, { ClassValue } from 'clsx'
import ClipLoader from 'react-spinners/ClipLoader'

import styles from './NewsletterForm.module.scss'

const MailUrl = '/api/mail'

// eslint-disable-next-line no-useless-escape
const IsEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

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

type User = {
  first_name: string
  last_name: string
  email: string
}

export default function NewsletterForm() {
  const [state, setFormState] = useState<FormState>(FormState.Idle)
  const [error, setError] = useState<ApiError | null>(null)
  const [form, setForm] = useState<User>({
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

  const isButtonDisabled = !canSubmit(form)

  return (
    <>
      <form onSubmit={handleSubmit} className={clsx(styles.form, 'lg:grid')}>
        <label className={clsx(styles.first, 'mb-4')}>
          First Name
          <Input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="John"
            value={form.first_name}
            validator={(value) => value.length > 0}
            message="First name is required"
            onChange={handleChange}
          />
        </label>
        <label className={clsx(styles.last, 'mb-4')}>
          Last Name
          <Input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Smith"
            value={form.last_name}
            validator={(value) => value.length > 0}
            message="Last name is required"
            onChange={handleChange}
          />
        </label>
        <label className={styles.email}>
          Email
          <Input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            validator={(value) => value.length > 0 && IsEmail.test(value)}
            message={(value) =>
              value.length > 0
                ? 'Please enter a valid email'
                : 'Email is required'
            }
            onChange={handleChange}
          />
        </label>
        <button
          disabled={isButtonDisabled || state === FormState.Loading}
          className={clsx(styles.submit, 'mt-6 lg:col-span-2', {
            [styles.disabled]: isButtonDisabled,
          })}
          type="submit"
        >
          {state === FormState.Loading ? (
            <ClipLoader size={25} color={'#ffffff'} />
          ) : (
            'Submit'
          )}
        </button>
      </form>
      <div>
        <Message state={state} error={error} />
      </div>
    </>
  )
}

function canSubmit({ first_name, last_name, email }: User) {
  const isFirstNameValid = first_name.length > 0
  const isLastNameValid = last_name.length > 0
  const isEmailValid = email.length > 0 && IsEmail.test(email)
  return isFirstNameValid && isLastNameValid && isEmailValid
}

// --

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
    case FormState.Done:
      message = "Thanks! We'll be in touch soon."
      break
    default:
      return null
  }
  return <p>{message}</p>
}

// --

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  message: string | ((value: string) => string)
  validator: (value: string) => boolean
  className?: ClassValue | ClassValue[]
}

function Input({
  className = '',
  message,
  value,
  validator,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBlur = () => {},
  ...props
}: InputProps) {
  const [wasFocused, setWasFocused] = useState(false)

  const isValid = !wasFocused || validator(String(value))
  const classes = Array.isArray(className) ? className : [className]

  const handleBlur = (evt: FocusEvent<HTMLInputElement>) => {
    if (!wasFocused) {
      setWasFocused(true)
    }
    onBlur(evt)
  }

  return (
    <>
      <input
        className={clsx(
          styles.input,
          { [styles.invalid]: !isValid },
          ...classes
        )}
        onBlur={handleBlur}
        {...props}
      />
      {!isValid && (
        <small className={styles.error}>
          {typeof message === 'function' ? message(String(value)) : message}
        </small>
      )}
    </>
  )
}
