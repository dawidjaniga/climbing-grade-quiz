import { Grid, Link } from "@geist-ui/core";
import NextLink from "next/link";
import styles from './styles.module.css'

export default function Header() {
    return (
        <Grid.Container justify="center">
            <Grid xs={12}>
                <div className={styles.wrapper}>
                    <NextLink href='/learn'>
                        Learn
                    </NextLink>
                    <NextLink href='/learn/table'>
                        Table
                    </NextLink>
                    <NextLink href='/quiz'>
                        Quiz
                    </NextLink>

                </div>
            </Grid>
        </Grid.Container>
    )
}