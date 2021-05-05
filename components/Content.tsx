import React from 'react'
import clsx, { ClassValue } from 'clsx'

export default function Content({
  children,
  className = '',
}: {
  className?: ClassValue
  children: React.ReactNode
}) {
  return <section className={clsx(className)}>{children}</section>
}
