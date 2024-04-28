import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>สวัสดี, ผม แบงค์</h1>
            <p className={styles.description}>ผมแบงค์ อภิวัฒน์ ฉลองธรรม เป็น junior mobile developer และ web developer
                มีประสบการณ์ทำงาน 5 เดือนด้วย React และ Flutter
            </p>
            <a href="mailto:Aphiwatch09@gmail.com" className={styles.contactbtn}>ติดต่อฉัน</a>
        </div>
        <img src={getImageUrl('hero/01.png')} alt='Hero image of me' className={styles.heroimage}/>
        <div className={styles.topblur}/>
        <div className={styles.bottomblur}/>
    </section>
}

export default Hero
