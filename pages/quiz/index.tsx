import Head from 'next/head'
import { Button, Card, Description, Grid, Link, Page, Table, Text } from '@geist-ui/core'
import { getSystems } from '../../quiz/freeClimbing'

export default function Quiz() {
    return (
        <div >
            <Head>
                <title>Quiz</title>
                <meta name="description" content="Quiz" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Page>
                <Grid.Container gap={2}>
                    <Grid xs={24}>

                        <Text h1>Quiz</Text>
                    </Grid>
                    <Grid xs={24}>
                        <Text h2>Free climbing</Text>
                    </Grid>
                    <Grid xs={24}>

                    </Grid>
                </Grid.Container>
            </Page>
        </div>

    )
}
