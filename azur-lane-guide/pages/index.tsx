import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'

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

      <main className={styles.main}>

        <h1 className="text-3xl font-bold underline text-orange-600">
          Hello world! 
        </h1>

        <h1 className="text-3xl text-blue-600">
          เทสสสสส
        </h1>

      </main>
      <Footer/>
    </>
  )
}
