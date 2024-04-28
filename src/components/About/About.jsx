import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>เกี่ยวกับ</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/AboutImage.png")}
                    alt="Me standing in front of my laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/laptop.png")} 
                        alt="Laptop icon"
                        className={styles.aboutImageicon}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>มีความรู้เบื้องต้นในการพัฒนาเว็บไซต์ด้วย HTML, CSS, Javascript และ React
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/smartphone.png")} 
                        alt="Laptop icon" 
                        className={styles.aboutImageicon}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Mobile Developer</h3>
                            <p>พัฒนาแอปพลิเคชันแบบ Responsive ทั้งระบบปฎิบัติการ Android และระบบ IOS ด้วย Flutter
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/server.png")} 
                        alt="Laptop icon" 
                        className={styles.aboutImageicon}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>มีประสบการณ์ในการสร้าง RESTful API ด้วย Go Fiber และ Python FastAPI
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/template.png")} 
                        alt="Laptop icon"
                        className={styles.aboutImageicon}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UX / UI</h3>
                            <p>มีประสบการออกแบบ UI และ UX ด้วย Figma และการทำ Design systems 
                            </p>
                        </div>
                    </li> 
                </ul>
            </div>
        </section>
    )
}

export default About


