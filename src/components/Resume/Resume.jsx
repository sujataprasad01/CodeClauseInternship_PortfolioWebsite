import React from 'react'
import { Contact } from '../Contact/Contact'
import { Link } from 'react-router-dom'
import styles from './Resume.module.css'
const Resume=()=> {
  return (
    <>
    <div className={styles.resume}>
      <Link to='https://acrobat.adobe.com/id/urn:aaid:sc:ap:051ce8b0-bf44-48d0-8c76-6593ad1aff46' className={styles.resume_button}><i class="fa-solid fa-download"></i>Download CV</Link>
    </div>
    <div className={styles.resume}>
      <Link to='https://linktr.ee/sujataprasad01' className={styles.resume_button}>Certificates</Link>
    </div>
    <div>
     <Contact></Contact>
    </div>
    </>
  )
}
export default Resume
