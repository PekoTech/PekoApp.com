import Head from 'next/head'
import clsx from 'clsx'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { Button, Content, Input } from '../components'
import styles from '../styles/Contact.module.scss'

const contactSchema = yup.object().shape({
  firstName: yup.string().required('Please enter your first name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  message: yup.string().required('Please enter a message'),
})

export default function Contact() {
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
            firstName: '',
            email: '',
            message: '',
          }}
          validationSchema={contactSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form
            className={clsx(
              styles.form,
              'w-full bg-gray-200 rounded-lg relative flex flex-col p-6 pb-8 md:p-8 md:pb-8'
            )}
          >
            <label>
              First name
              <Input name="firstName" type="text" placeholder="John" />
            </label>
            <label>
              Email
              <Input name="email" type="email" placeholder="john@example.com" />
            </label>
            <label className={clsx(styles.message, 'h-full flex flex-col')}>
              Message
              <Input
                className="h-full"
                name="message"
                as="textarea"
                placeholder="Something awesome!"
              />
            </label>
            <Button className={styles.submit}>Submit</Button>
          </Form>
        </Formik>
      </Content>
    </>
  )
}
