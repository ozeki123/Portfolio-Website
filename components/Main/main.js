import Navbar from "../Navbar/navbar"
import Layout from '../Layout/layout'
import Stride from '../projects/stride/stride'
import Recountry from "../projects/recountry/recountry"

import styles from './main.module.scss'

export default function Main() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <div className={styles.header}>
                        <div className={styles.headerContent}>
                            <div className={styles.left}>
                                <p>andrew ozeki</p>
                                <p>FRONT END DEVELOPER & UI DESIGNER</p>
                            </div>
                            <div className={styles.right}>
                                <p>Work</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.stride}>
                            <Stride/>
                        </div>
                        <div className={styles.stride}>
                            <Recountry/>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.footerContent}>
                            <div className={styles.left}>
                                <p>Scroll to discover</p>
                            </div>
                            <div className={styles.right}>
                                <a href="#"><p>View projects on Github</p></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
        
        
    )
  }