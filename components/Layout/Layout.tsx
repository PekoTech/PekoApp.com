import clsx from 'clsx'

import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <main
      className={clsx(
        styles.main,
        'p-6 py-20 lg:py-24 flex-col lg:px-16 lg:flex lg:items-center'
      )}
    >
      {children}
    </main>
  )
}
