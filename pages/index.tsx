import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import { NewsletterForm, Content } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Peko App</title>
      </Head>
      <Content className={styles.content}>
        <div className="space-y-12">
          <div className="flex items-center text-3xl">
            <img
              className="w-24 mr-2"
              src="assets/Peko_Logo.png"
              alt="Peko logo"
            />
            <span>Peko</span>
          </div>
          <header className={styles.header}>
            <h1 className="mb-2 text-3xl font-bold lg:text-4xl">
              <span className={styles.highlight}>Peculiar produce</span>{' '}
              delivered to your doorstep.
            </h1>
            <p className="text-xl lg:text-2xl">
              Save up to 40% on your groceries.
            </p>
          </header>
          <section className="max-w-3xl space-y-4">
            <p>
              Peculiar produce are the fruits and vegetables from local British
              Columbia farms that taste amazing, but just don't look quite
              right. Instead of supermarkets throwing perfectly fine food out,
              we buy and deliver them to you at a heavily discounted price.
            </p>
            <p>Let Peko help you save time, money, and reduce food waste!</p>
          </section>
          <section>
            <header className="mb-4 lg:mb-8">
              <h1 className="mb-1 text-xl font-bold uppercase">
                Be notified when order form opens.
              </h1>
              <p>First deliveries on May 31st.</p>
            </header>
            <NewsletterForm />
          </section>
          <a className={styles.contact} href="mailto:admin@pekoapp.com">
            Contact Us
          </a>
        </div>
        <div>
          <img
            className={styles.picture}
            src="./produce.png"
            alt="Assortment of ugly produce"
          />
        </div>
      </Content>
    </>
  )
}
