import strideImage from "../../../public/assets/images/StrideImage.jpg"
import Image from 'next/image'
import styles from './stride.module.scss'

export default function Stride() {
    return (
      <div className={styles.container}>
        <div className={styles.contents}>
          <div className={styles.text}>
            <h1>STRIDE & CO</h1>
            <p>Website concept built in Angular</p>
            <a href="#"><p>Visit Website</p></a>
          </div>
          <div className={styles.image}>
            <Image src={strideImage} alt="stride illustration"/>
          </div>
        </div>
        
        
      </div>
      
    )
  }
