import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Peko App</title>
      </Head>
      <main
        className={
          'bg-white px-8 py-12 my-0 mx-auto max-w-screen-sm lg:flex lg:max-w-screen-xl'
        }
      >
        Hello!
      </main>
    </>
  )
}
