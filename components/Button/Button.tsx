import clsx, { ClassValue } from 'clsx'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import styles from './Button.module.scss'

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: ClassValue
  children: React.ReactNode
}

export default function Button({ className, children, ...props }: ButtonProps) {
  const classes = Array.isArray(className) ? className : [className]
  return (
    <button className={clsx(styles.primary, ...classes)} {...props}>
      {children}
    </button>
  )
}
