import Head from 'next/head'
import { Button, ButtonDropdown, Card, Description, Grid, Link, Page, Table, Text } from '@geist-ui/core'
import { getSystems } from '../../quiz/freeClimbing'
import styles from './style.module.css'
import Header from 'components/header'

type GradeRow = {
    [index: string]: string
}

const systems = getSystems()
const gradesData: Array<GradeRow> = []

systems.map(system => {
    system.grades.map(grade => {
        if (!gradesData[grade.id]) {
            gradesData[grade.id] = {}
        }

        gradesData[grade.id][system.shortName] = grade.name
    })
})

function getRowColorByNumber(rowNumber: number): string {
    if (rowNumber <= 10) {
        return styles.red
    } else if (rowNumber <= 14) {
        return styles.purple
    } else if (rowNumber <= 18) {
        return styles.green
    } else if (rowNumber <= 22) {
        return styles.orange
    } else if (rowNumber <= 26) {
        return styles.violet
    } else if (rowNumber <= 30) {
        return styles.blue
    } else if (rowNumber <= 34) {
        return styles.yellow
    }

    return ''
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
                        <Text h1>Clibing Grades Table</Text>
                    </Grid>

                    <Grid xs={24}>
                        <Table data={gradesData} rowClassName={(_data, rowIndex) => getRowColorByNumber(rowIndex)} className={styles.table}>
                            {systems.map(({ shortName, fullName }) => <Table.Column prop={shortName} label={fullName} />)}
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
