import Link from 'next/Link'
import { Fragment } from 'react'
import styles from './Header.module.css'
export default function index() {
    return (
        <Fragment>
            <header className={styles.header} >
                <ul className={styles.menu}>
                    <li className={styles.menuItems}><Link href="/">Home</Link></li>
                    <li className={styles.menuItems}><Link href="/blogs">Blog</Link></li>
                    <li className={styles.menuItems}><a href="/users" >Users</a></li>
                </ul>
            </header>
        </Fragment >
    )
}
