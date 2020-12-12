import { useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { Button, Content, Input } from '../components'
import { api, ApiError, ContactMessage } from '../lib/api'
import styles from '../styles/Contact.module.scss'
import { ClipLoader } from 'react-spinners'

const contactSchema = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  message: yup.string().required('Please enter a message'),
})

enum FormState {
  Done,
  Error,
  Idle,
  Invalid,
  Loading,
}

export default function Contact() {
  const [state, setFormState] = useState<FormState>(FormState.Idle)
  const [error, setError] = useState<ApiError | null>(null)

  const handleSubmit = (info: ContactMessage) => {
    console.log(info)
    setFormState(FormState.Loading)
    api
      .contact(info)
      .then(() => setFormState(FormState.Done))
      .catch(({ status, error }) => {
        console.log(status, error)
        setFormState(FormState.Error)
        setError({ status, message: error })
      })
  }
  return (
    <>
      <Head>
        <title>Contact Peko</title>
      </Head>
      <Content className="w-full md:mt-8">
        <header className="text-center mb-8 md:mb-16">
          <h1 className="text-xl font-medium mb-2 md:text-3xl">Contact Us</h1>
          <p className="text-sm">
            Got any questions or just want to chat? Reach out to us!
          </p>
        </header>
        <Formik
          initialValues={{
            first_name: '',
            email: '',
            message: '',
          }}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          <Form
            className={clsx(
              styles.form,
              'w-full bg-gray-200 rounded-lg relative flex flex-col p-6 pb-8 md:p-8 md:pb-8'
            )}
          >
            <label>
              First name
              <Input name="first_name" type="text" placeholder="John" />
            </label>
            <label>
              Email
              <Input name="email" type="email" placeholder="john@example.com" />
            </label>
            <label htmlFor="message" className="flex flex-col">
              Message
            </label>
            <Input
              className="flex-1"
              name="message"
              as="textarea"
              placeholder="Something awesome!"
            />
            <Button className={styles.submit} type="submit">
              {state === FormState.Loading ? (
                <ClipLoader size={25} color={'#ffffff'} />
              ) : (
                'Submit'
              )}
            </Button>
          </Form>
        </Formik>
        <div className="text-center mt-8">
          <Message state={state} error={error} />
        </div>
      </Content>
    </>
  )
}

// --

type MessageProps = {
  state: FormState
  error: ApiError
}

function Message({ state, error }: MessageProps) {
  console.log(error)
  let message = ''
  switch (state) {
    case FormState.Error:
      message = `Something went wrong. ${error.status}: ${error.message}`
      break
    case FormState.Done:
      message = "Thanks! We'll be in touch soon."
      break
    default:
      return null
  }
  return <p>{message}</p>
}
