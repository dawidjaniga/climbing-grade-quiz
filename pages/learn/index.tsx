import Head from 'next/head'
import { Button, Card, Description, Grid, Loading, Page, Radio, Spacer, Text } from '@geist-ui/core'
import { getSystems, Grade, System } from '../../quiz/freeClimbing'
import React, { useEffect, useState } from 'react'
import { sample, sampleSize } from 'lodash'
import Header from 'components/header'
import { ColoredBadge } from '../../components/ColoredBadge'


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
    const [answeredGradeId, setAnsweredGradeId] = useState<number>(-1)
    const [status, setStatus] = useState<'success' | 'error' | 'idle'>('idle')

    function selectNextSystemsAndGrades() {
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
    }

    useEffect(() => {
        selectNextSystemsAndGrades()
    }, [])

    const onAnswer = (val: string | number) => {
        if (typeof val === 'number') {
            setAnsweredGradeId(val)
        }
    }

    function onCheck() {
        if (answeredGradeId === firstGrade?.id) {
            setStatus('success')
        } else {
            setStatus('error')

        }

        setTimeout(() => {
            setAnsweredGradeId(-1)
            setStatus('idle')
            selectNextSystemsAndGrades()

        }, 3000)
    }

    return (
        <div >
            <Head>
                <title>Learn</title>
                <meta name="description" content="Learn" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Page>

                <Grid xs={24}>
                    <Text h1>Learn</Text>
                </Grid>

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

                                            <Button type="success" onClick={onCheck} disabled={answeredGradeId === -1}>Check</Button>
                                        </>
                                    } />
                                </Card>
                            </Grid>
                            <Grid xs={24} justify='center'>
                                {status === 'success' && <Card type='success'><Text h4>Correct!</Text></Card>}
                                {status === 'error' && <Card type='error'><Text h4>Sorry</Text><Text>The correct answer is {secondGrades?.find(grade => grade.id === firstGrade.id)?.name}</Text></Card>}
                            </Grid>



                        </> : <Loading />
                    }


                </Grid.Container>
            </Page>
        </div>

    )
}
