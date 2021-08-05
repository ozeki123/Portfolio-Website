import React from 'react'
import styles from './layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                {children}
            </div>
        </div>
    )
}

export default Layout
