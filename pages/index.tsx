import { Grid, Text } from '@geist-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Climbing Grade Quiz</title>
        <meta name="description" content="Learn and check your climbing grades knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid.Container justify='center'>

        <Grid xs={12}>
          <Text h1></Text>
        </Grid>
      </Grid.Container>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Climbing Grade Quiz!
        </h1>

        <p className={styles.description}>
          Learn and test your knowledge of
          <Text blockquote my={1}>
            climbing grades
          </Text>

        </p>

        <div className={styles.grid}>
          <Link href='/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn how climbing grades translates between systems.</p>
          </Link>

          <Link href='/quiz' className={styles.card}>
            <h2>Quiz &rarr;</h2>
            <p>Check your knowledge and know your score.</p>
          </Link>

          <Link href='/learn/table' className={styles.card}>
            <h2>Table &rarr;</h2>
            <p>Improve your understanding by in-depth study of all climbing scales.</p>
          </Link>

          <Link href='/about' className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Want to know why we're doing this?</p>
          </Link>




        </div>
      </main>

      <footer className={styles.footer}>
        Created by&nbsp;
        <a
          href="https://dawidjaniga.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dawid Janiga
        </a>
      </footer>
    </div>
  )
}
