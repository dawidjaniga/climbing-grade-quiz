import Head from 'next/head'
import { Badge, Button, ButtonDropdown, Card, Description, Grid, Link, Loading, Page, Progress, Radio, Spacer, Table, Text } from '@geist-ui/core'
import { getSystems, Grade, System } from '../../quiz/freeClimbing'
import hex from 'text-hex'
import styles from './style.module.css'
import React, { useEffect, useState } from 'react'
import { random, sample, sampleSize } from 'lodash'

const data = [
    { yds: '5.1', french: '2' },
    { yds: '5.2', french: '3' },
]

const rowColorByIndex: Record<number, string> = {
    0: styles.yellow,
    1: styles.green,
}

function ColoredBadge({ children }: React.PropsWithChildren<{}>) {
    return <Badge style={{ backgroundColor: hex(children) }}>{children}</Badge>
}

function getRandomSystem(excludeSystem?: System): System {
    const systems = getSystems()
    const randomSystem = sample(systems.filter(system => system.shortName !== excludeSystem?.shortName))

    if (randomSystem) {
        return randomSystem
    } else {
        return {
            shortName: 'rs',
            fullName: 'Random System',
            grades: []
        }
    }
}

export default function Learn() {
    const [firstSystem, setFirstSystem] = useState<System>()
    const [firstGrade, setFirstGrade] = useState<Grade>()
    const [secondSystem, setSecondSystem] = useState<System>()
    const [secondGrades, setSecondGrades] = useState<Grade[]>()
    const [answeredGradeId, setAnsweredGradeId] = useState(0)

    useEffect(() => {
        const first = getRandomSystem()
        const randomFirstGrade = sample(first.grades)!
        const second = getRandomSystem(first)
        const correctAnswer = second.grades.find(grade => grade.id === randomFirstGrade.id) || {
            id: randomFirstGrade?.id,
            name: 'Not relevant'
        }
        const secondGrades: Grade[] = [
            correctAnswer,
            ...sampleSize(second.grades.filter(grade => grade.id !== correctAnswer?.id), 3)
        ]

        setFirstSystem(first)
        setFirstGrade(randomFirstGrade)
        setSecondSystem(second)
        setSecondGrades(secondGrades)
    }, [])

    const onAnswer = (val: string | number) => {
        if (typeof val === 'number') {
            setAnsweredGradeId(val)
        }
    }

    function onCheck() {
        if (answeredGradeId === firstGrade?.id) {
            console.log('correct answer')
            // add to 
        } else {

            console.log('inccorrect answer')
        }
    }

    return (
        <div >
            <Head>
                <title>Learn</title>
                <meta name="description" content="Learn" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Page>
                {/* <Progress type="success" value={45} /> */}

                <Grid.Container gap={2}>
                    {firstSystem && firstGrade ?
                        <>
                            <Grid xs={24}>
                                <Text my={1} h3>Select matching grade</Text>
                            </Grid>
                            <Grid xs={24}>
                                <Card width='100%'>
                                    <Description title='First system and grade' content={
                                        <>
                                            <ColoredBadge>{firstSystem?.fullName}</ColoredBadge>
                                            <Spacer />
                                            <ColoredBadge>{firstGrade?.name}</ColoredBadge>
                                        </>}
                                    />
                                </Card>
                            </Grid>
                            <Grid xs={24}>
                                <Card width='100%'>
                                    <Description title='Second system and grade' content={
                                        <>
                                            <ColoredBadge>{secondSystem?.fullName}</ColoredBadge>
                                            <Spacer />
                                            <Grid xs={24} justify='center' direction='column'>
                                                <Radio.Group value={answeredGradeId} onChange={onAnswer}>
                                                    {secondGrades?.map(grade => <Radio value={grade.id} key={grade.id}><ColoredBadge>{grade.name}</ColoredBadge></Radio>)}
                                                </Radio.Group>

                                            </Grid>

                                            <Button type="success" onClick={onCheck}>Check</Button>
                                        </>
                                    } />
                                </Card>
                            </Grid>



                        </> : <Loading />
                    }
                </Grid.Container>
            </Page>
        </div>

    )
}
