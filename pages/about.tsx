import { Grid, Link, Page, Spacer, Text } from '@geist-ui/core'
import Header from 'components/header'
import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Climbing Grade Quiz</title>
        <meta name="description" content="Learn and check your climbing grades knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Page>
        <Grid.Container justify='center' direction='column'>

          <Grid xs={12}>
            <Text h1>About</Text>
          </Grid>

          <Grid xs={12}>
            <Text>
              I'm just confused because of the amount of different grades in climbing world.
              <Spacer />
              And would like to learn how to understand difficulties between routes.
            </Text>
          </Grid>

          <Spacer />

          <Grid xs={12}>
            <Text h2>Feedback & questions</Text>
          </Grid>

          <Grid xs={12}>
            <Text>
              I'm open to feedback. If you have any suggestions or questions drop me a message to <Link href="mailto:dawidjaniga@gmail.com" color underline>dawidjaniga@gmail.com</Link>
            </Text>
          </Grid>

          <Grid xs={12} justify='flex-end'>
            <Text i>Dawid</Text>
          </Grid>
        </Grid.Container>
      </Page>

    </div>
  )
}
