import Head from 'next/head'
import { Button, ButtonDropdown, Card, Description, Grid, Link, Page, Table, Text } from '@geist-ui/core'
import { getSystems } from '../../quiz/freeClimbing'
import styles from './style.module.css'
import Header from 'components/header'

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
            <Header />
            <Page>
                <Grid.Container gap={2}>
                    <Grid xs={24}>
                        <Text h1>Learn</Text>
                    </Grid>
                    <Grid xs={24}>
                        <Text h2>Free climbing</Text>
                    </Grid>

                    <Grid xs={24}>
                        <Table data={data} rowClassName={(_data, rowIndex) => rowColorByIndex[rowIndex]}>
                            {getSystems().map(({ shortName, fullName }) => <Table.Column prop={shortName} label={fullName} />)}
                        </Table>
                    </Grid>
                    <Grid xs={24}>
                        <Card width='100%'>
                            <Description title='Sources' />
                            The quiz is based on comparison made on Wikipedia.<br />

                            <Link href='https://en.wikipedia.org/wiki/Grade_(climbing)#Free_climbing_2' color icon target='_blank'>Read more</Link>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Page>
        </div>

    )
}
