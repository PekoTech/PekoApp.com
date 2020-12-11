import React from 'react'
import clsx, { ClassValue } from 'clsx'

export default function Content({
  children,
  className = '',
}: {
  className?: ClassValue
  children: React.ReactNode
}) {
  return (
    <section className={clsx('mt-6 lg:grid', className)}>{children}</section>
  )
}
