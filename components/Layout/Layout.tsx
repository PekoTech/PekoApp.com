import clsx from 'clsx'

import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return <main className={clsx(styles.main)}>{children}</main>
}
