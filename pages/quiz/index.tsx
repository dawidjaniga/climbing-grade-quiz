import Head from 'next/head'
import { Button, Card, Description, Grid, Input, Loading, Page, Progress, Radio, Spacer, Text } from '@geist-ui/core'
import { getSystems, Grade, System } from '../../quiz/freeClimbing'
import React, { ChangeEvent, useEffect, useState } from 'react'
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

function Switch({ correctValue, value, children }: React.PropsWithChildren<{ correctValue: string, value: string }>) {
    if (value === correctValue) {
        return <>{children}</>
    } else {
        return null
    }
}

const maxQuestionNumber = 4

export default function Quiz() {
    const [firstSystem, setFirstSystem] = useState<System>()
    const [firstGrade, setFirstGrade] = useState<Grade>()
    const [secondSystem, setSecondSystem] = useState<System>()
    const [questionNumber, setQuestionNumber] = useState(1)
    const [correctAnswer, setCorrectAnswer] = useState<string>()
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [status, setStatus] = useState<'finished' | 'answering'>('answering')
    const [answer, setAnswer] = useState('')

    function selectNextSystemsAndGrades() {
        const first = getRandomSystem()
        const randomFirstGrade = sample(first.grades)!
        const second = getRandomSystem(first)
        const correctAnswer = second.grades.find(grade => grade.id === randomFirstGrade.id)?.name || 'no'

        setFirstSystem(first)
        setFirstGrade(randomFirstGrade)
        setSecondSystem(second)
        setCorrectAnswer(correctAnswer)
    }

    useEffect(() => {
        selectNextSystemsAndGrades()
    }, [])

    const onAnswer = (event: ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value)
    }

    function onNext() {
        setAnswer('')

        if (answer === correctAnswer) {
            setCorrectAnswers(value => value + 1)
        }

        if (questionNumber === maxQuestionNumber) {
            setStatus('finished')
        } else {
            setQuestionNumber(value => value + 1)
            selectNextSystemsAndGrades()
        }
    }

    function onReset() {
        setQuestionNumber(1)
        setCorrectAnswers(0)
        setStatus('answering')
    }

    return (
        <div >
            <Head>
                <title>Quiz</title>
                <meta name="description" content="Quiz" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Page>
                <Grid xs={24} mb={3}>
                    <Text h1>Quiz</Text>
                    <Text my={1} h3>Answer {maxQuestionNumber} questions and get your score. Type "no" when there is no matching grade.</Text>
                </Grid>

                Question {questionNumber} out of {maxQuestionNumber}
                <Spacer />
                <Progress type="success" value={questionNumber / maxQuestionNumber * 100} />
                <Spacer mb={3} />

                <Grid.Container gap={2}>
                    {firstSystem && firstGrade ?
                        <>
                            <Switch correctValue='answering' value={status}>
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
                                                <Input value={answer} onChange={onAnswer} placeholder="Type matching grade" />
                                                <Spacer />
                                                <Button type="success" onClick={onNext}>{questionNumber === maxQuestionNumber ? 'Finish' : 'Next'}</Button>
                                            </>
                                        } />
                                    </Card>
                                </Grid>
                            </Switch>
                            <Switch correctValue='finished' value={status}>
                                <Grid xs={24} justify='center'>
                                    <Card type='default'>
                                        <Text h4>Finished! Your score is {correctAnswers / maxQuestionNumber * 100}%</Text>
                                        <Button type='warning' onClick={onReset}>Take quiz again</Button>
                                    </Card>
                                </Grid>
                            </Switch>
                        </> : <Loading />
                    }
                </Grid.Container>
            </Page>
        </div>

    )
}
