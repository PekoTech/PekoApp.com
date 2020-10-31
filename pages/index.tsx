import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Peko App</title>
      </Head>
      <nav>
        <Link href="/">
          <>
            <img src="assets/Peko_Logo.png" width="60" height="70" alt="" />
            <span>Peko</span>
          </>
        </Link>
        <a href="mailto:pekoapp@gmail.com">Contact Us</a>
      </nav>
      <main>
        <aside>
          <header>
            <h1>The Smartest Pantry Management App.</h1>
            <p>Less waste. Less guilt.</p>
          </header>
          <section>
            <header>
              <h1>Stay in the know.</h1>
              <p>Subsribe for release updates and beta testing.</p>
            </header>
            <form>
              <input
                className="signup-input"
                id="first_name"
                type="text"
                placeholder="First Name"
              />
              <input
                className="signup-input"
                id="last_name"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="signup-input"
                id="email"
                type="text"
                placeholder="Email Address"
                maxLength={50}
              />
              <button className="signup-input" id="submit" type="submit">
                Submit
              </button>
            </form>
          </section>
        </aside>
        <section>
          <video autoPlay muted loop playsInline id="peko-video">
            <source src="assets/peko-video.mp4" type="video/mp4" />
          </video>
        </section>
      </main>
    </>
  )
}
