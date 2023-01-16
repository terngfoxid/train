import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import Home_Card from '../components/Home_Card'

export default function Home() {
  return (
    <>
      <Head>
        <title>Azur Lane Guide</title>
        <meta name="description" content="Webapp for azur lane TH comunity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Topbar />

      <main>
        <br></br>
        <Home_Card />
        <br></br>
      </main>
      <Footer />
    </>
  )
}
