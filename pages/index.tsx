import Head from 'next/head'
import clsx from 'clsx'

import styles from '../styles/Home.module.scss'
import { NewsletterForm, Layout, Content } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Peko App</title>
      </Head>
      <Layout>
        <Content className={styles.content}>
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
              <p>Subscribe for release updates and beta testing.</p>
            </header>
            <NewsletterForm />
          </section>
        </Content>
      </Layout>
    </>
  )
}
