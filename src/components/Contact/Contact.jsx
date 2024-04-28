import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>ติดต่อ</h2>
            <p>โปรดติดต่อโดยด่วนเลยครับ</p>
            <p>อยากได้งานครับ</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/phone-call.png')} alt="Phone call icon" />
                <a href="tel:0994762751">099-476-2751</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/gmail.png')} alt="Email icon" />
                <a href="mailto:Aphiwatch09@gmail.com">Aphiwatch09@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
                <a href="https://github.com/Aphiwatch">Aphiwatch</a>
            </li>
        </ul>
    </footer>
}

export default Contact
