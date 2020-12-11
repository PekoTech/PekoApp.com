import { Field } from 'formik'
import clsx, { ClassValue } from 'clsx'

import styles from './Input.module.scss'

type InputProps = {
  name: string
  as?: 'input' | 'textarea'
  className?: ClassValue | ClassValue[]
  type?: string
  placeholder?: string
}

export default function Input({
  name,
  as = 'input',
  className = '',
  ...props
}: InputProps) {
  const classes = Array.isArray(className) ? className : [className]
  const Component = as
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const hasError = meta.error && meta.touched
        return (
          <>
            <Component
              className={clsx(
                styles.input,
                { [styles.invalid]: hasError },
                ...classes
              )}
              {...field}
              {...props}
            />
            <small
              className={clsx(styles.error, {
                'opacity-0': !hasError,
                'opacity-100': hasError,
              })}
            >
              {hasError ? meta.error : `placeholder`}
            </small>
          </>
        )
      }}
    </Field>
  )
}
