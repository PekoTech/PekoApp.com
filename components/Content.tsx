import clsx from 'clsx'

export default function Content({ children, className = '' }) {
  return (
    <section className={clsx('mt-6 md:mt-20 lg:grid lg:mt-12', className)}>
      {children}
    </section>
  )
}
