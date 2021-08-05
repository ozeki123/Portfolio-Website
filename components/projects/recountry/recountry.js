import recountryImage from "../../../public/assets/images/recountry.png"
import Image from 'next/image'
import styles from './recountry.module.scss'

export default function Recountry() {
    return (
      <div className={styles.container}>
        <div className={styles.contents}>
          <div className={styles.image}>
            <Image src={recountryImage} alt="recountry illustration"/>
          </div>
          <div className={styles.text}>
            <h1>STRIDE & CO</h1>
            <p>Website concept built in Angular</p>
            <a href="#"><p>Visit Website</p></a>
          </div>
          
        </div>
        
        
      </div>
      
    )
  }
