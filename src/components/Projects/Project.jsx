import React from 'react'
import styles from './Project.module.css'
import newsmonkey from '../../assets/projects/newsmonkey.png'
const Project = () => {
  return (
   <section className={styles.container}>
    <h3 className={styles.title}>Projects</h3>
    <div className={styles.projects}>
     <div className={styles.container}>
        <img src={newsmonkey} className={styles.image}></img>
        <h4 className={styles.title}>News Website</h4>
        <p className={styles.description}>It is nefjnejejfj</p>
        <ul className={styles.skills}>

        </ul>
        <div className={styles.links}>
            <a href={demo} className={styles.link}>Demo</a>
            <a href={source} className={styles.link}>Source</a>
        </div>
     </div>
    </div>
   </section>
  )
}

export default Project
