import React from 'react'
import { Contact } from '../Contact/Contact'
import { Link } from 'react-router-dom'
import styles from './Resume.module.css'
const Resume=()=> {
  return (
    <>
    <div className={styles.resume}>
      <Link to='https://acrobat.adobe.com/id/urn:aaid:sc:AP:d844f860-8f6d-4981-9916-a98c0f9ad6ac' className={styles.resume_button}><i class="fa-solid fa-download"></i>Download CV</Link>
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
