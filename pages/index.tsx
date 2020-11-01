import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import styles from '../styles/Home.module.scss'
import NewsletterForm from '../components/NewsletterForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Peko App</title>
      </Head>
      <main
        className={clsx(
          styles.main,
          'p-6 lg:px-16 lg:py-8 lg:flex lg:items-center'
        )}
      >
        <nav className="flex items-center justify-between text-lg md:text-xl lg:p-6 lg:px-16 lg:py-8 lg:fixed lg:top-0 lg:left-0 lg:w-full">
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
          <a href="mailto:pekoapp@gmail.com">Contact Us</a>
        </nav>
        <section
          className={clsx(styles.content, 'mt-6 md:mt-20 lg:grid lg:mt-0')}
        >
          <header className={clsx(styles.header, 'lg:mb-12')}>
            <h1 className="font-bold text-3xl mb-2 lg:text-4xl">
              The <span className={styles.highlight}>Smartest</span> Pantry
              Management App.
            </h1>
            <p className="text-xl lg:text-2xl">Less waste. Less guilt.</p>
          </header>
          <section className={clsx(styles.video, 'my-12 md:my-16 lg:my-0')}>
            <video autoPlay muted loop playsInline id="peko-video">
              <source src="assets/peko-video.mp4" type="video/mp4" />
            </video>
          </section>
          <section className={clsx(styles.form, 'mb-12')}>
            <header className="mb-4 lg:mb-8">
              <h1 className="font-bold mb-1">STAY IN THE KNOW.</h1>
              <p>Subsribe for release updates and beta testing.</p>
            </header>
            <NewsletterForm />
          </section>
        </section>
      </main>
    </>
  )
}
