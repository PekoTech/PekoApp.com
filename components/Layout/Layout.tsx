import Link from 'next/link'
import clsx from 'clsx'

import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <main
      className={clsx(
        styles.main,
        'p-6 flex-col lg:px-16 lg:pt-8 lg:pb-16 lg:flex lg:items-center'
      )}
    >
      <nav className="bg-white flex items-center justify-between text-lg md:text-xl lg:w-full">
        <Link href="/">
          <a className="flex items-center -ml-2">
            <img
              className="w-12 mr-2"
              src="assets/Peko_Logo.png"
              alt="Peko logo"
            />
            <span>Peko</span>
          </a>
        </Link>
        <ul className="flex">
          <li className="mr-4">
            <Link href="/team">The Team</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  )
}
