import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Peko App</title>
      </Head>
      <nav className="flex items-center justify-between text-lg md:text-xl p-4 pr-6">
        <Link href="/">
          <a className="flex items-center">
            <img
              className="w-12 mr-2"
              src="assets/Peko_Logo.png"
              alt="Peko logo"
            />
            <span>Peko</span>
          </a>
        </Link>
        <a href="mailto:pekoapp@gmail.com">Contact Us</a>
      </nav>
      <main className="px-6 pb-4 mt-6">
        <header className="mb-12">
          <h1 className="font-bold text-3xl mb-2">
            The <span className={styles.highlight}>Smartest</span> Pantry
            Management App.
          </h1>
          <p className="text-xl">Less waste. Less guilt.</p>
        </header>
        <section className="mb-12">
          <video autoPlay muted loop playsInline id="peko-video">
            <source src="assets/peko-video.mp4" type="video/mp4" />
          </video>
        </section>
        <section className="mb-12">
          <header className="mb-4">
            <h1 className="font-bold mb-1">STAY IN THE KNOW.</h1>
            <p>Subsribe for release updates and beta testing.</p>
          </header>
          <form>
            <input
              className={clsx(styles.input, 'mb-4')}
              id="first_name"
              type="text"
              placeholder="First Name"
            />
            <input
              className={clsx(styles.input, 'mb-4')}
              id="last_name"
              type="text"
              placeholder="Last Name"
            />
            <input
              className={styles.input}
              id="email"
              type="text"
              placeholder="Email Address"
              maxLength={50}
            />
            <button
              className={clsx(styles.submit, 'mt-4')}
              id="submit"
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
