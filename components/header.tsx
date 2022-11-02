import { Grid } from "@geist-ui/core";
import ActiveLink from "./activeLink";
import styles from './styles.module.css'

export default function Header() {
    return (
        <Grid.Container justify="center">
            <Grid xs={12}>
                <div className={styles.wrapper}>
                    <ActiveLink href='/' activeClassName={styles.activeLink}>
                        <a className={styles.link}>Home</a>
                    </ActiveLink>

                    <ActiveLink href='/learn' activeClassName={styles.activeLink}>
                        <a className={styles.link}>Learn</a>
                    </ActiveLink>

                    <ActiveLink href='/learn/table' activeClassName={styles.activeLink}>
                        <a className={styles.link}>Table</a>
                    </ActiveLink>

                    <ActiveLink href='/quiz' activeClassName={styles.activeLink}>
                        <a className={styles.link}>Quiz
                        </a>
                    </ActiveLink>
                </div>
            </Grid>
        </Grid.Container>
    )
}