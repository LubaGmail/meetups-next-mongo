import MainNav from "./main-nav"

import styles from './layout.module.css'

const Layout = (props) => {

    return (
        <div className={styles.main}>
            <MainNav />
            {props.children}
        </div>
    )
}

export default Layout