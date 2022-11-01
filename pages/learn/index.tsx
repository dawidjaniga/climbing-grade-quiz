import Head from 'next/head'
import { Button, Page, Table, Text } from '@geist-ui/core'
import { getSystems } from '../../quiz/freeClimbing'
import styles from './style.module.css'

const data = [
    { yds: '5.1', french: '2' },
    { yds: '5.2', french: '3' },
]

const rowColorByIndex: Record<number, string> = {
    0: styles.yellow,
    1: styles.green,
}

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

                <Text h2>Free climbing</Text>
                <Table data={data} rowClassName={(_data, rowIndex) => rowColorByIndex[rowIndex]}>
                    {getSystems().map(({ shortName, fullName }) => <Table.Column prop={shortName} label={fullName} />)}
                </Table>
            </Page>
        </div>

    )
}
