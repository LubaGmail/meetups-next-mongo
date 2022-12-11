import Link from 'next/link'

import styles from './main-nav.module.css'

const MainNav = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>LOGO</Link>
            </div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/new-meetup'>New Meetup</Link>
                </li>
            </ul>
        </header>
    )
}

export default MainNav