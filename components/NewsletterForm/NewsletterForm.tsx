import { useState } from 'react'
import clsx from 'clsx'
import ClipLoader from 'react-spinners/ClipLoader'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import styles from './NewsletterForm.module.scss'
import { Input, Button } from '../index'
import { api, ApiError, User } from '../../lib/api'

enum FormState {
  Done,
  Error,
  Idle,
  Invalid,
  Loading,
}

const signupSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
})

export default function NewsletterForm() {
  const [state, setFormState] = useState<FormState>(FormState.Idle)
  const [error, setError] = useState<ApiError>({} as ApiError)

  const handleSubmit = (user: User) => {
    setFormState(FormState.Loading)
    api
      .signup(user)
      .then(() => setFormState(FormState.Done))
      .catch((res) => {
        setFormState(FormState.Error)
        setError({ status: res.status, message: res.error })
      })
  }

  return (
    <>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
        }}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form className={clsx(styles.form, 'lg:grid')}>
            <label className={clsx(styles.first)}>
              First Name
              <Input name="first_name" type="text" placeholder="John" />
            </label>
            <label className={clsx(styles.last)}>
              Last Name
              <Input name="last_name" type="text" placeholder="Smith" />
            </label>
            <label className={styles.email}>
              Email
              <Input
                className={styles.input}
                name="email"
                type="email"
                placeholder="john@example.com"
              />
            </label>
            <Button
              disabled={!props.isValid || state === FormState.Loading}
              className={clsx('w-full mt-2 lg:col-span-2', {
                [styles.disabled]: !props.isValid,
              })}
              type="submit"
            >
              {state === FormState.Loading ? (
                <ClipLoader size={25} color={'#ffffff'} />
              ) : (
                'Submit'
              )}
            </Button>
          </Form>
        )}
      </Formik>
      <div className="text-center mt-4">
        <Message state={state} error={error} />
      </div>
    </>
  )
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
