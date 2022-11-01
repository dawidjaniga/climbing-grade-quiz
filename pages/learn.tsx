import Head from 'next/head'
import { Button, Page, Text } from '@geist-ui/core'

export default function Index() {
    return (
        <div >
            <Head>
                <title>Learn</title>
                <meta name="description" content="Learn" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Page>
                <Text h1>Learn</Text>
                <Button>Submit</Button>
            </Page>
        </div>

    )
}
