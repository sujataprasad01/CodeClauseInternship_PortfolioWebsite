import React from 'react'
import styles from './About.module.css'
import aboutimg from '../../assets/about/5699949.png'
import fronticon from '../../assets/about/cursorIcon.png'
import backicon from '../../assets/about/serverIcon.png'
import uiicon from '../../assets/about/uiIcon.png'
import dsicon from '../../assets/about/datasc.png'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutnavbar}>
      Domains
      </div>
     
      <div className={styles.content}>
        <div className={styles.image}>
            <img src={aboutimg}></img>
        </div>
        <div className={styles.description}>
           <div className={styles.list}>
                <div className={styles.ds}><img src={dsicon} ></img></div>
                <div className={styles.domain}><h3>Data Scientist</h3><p>Currently working on Data Scientist with the domains under it like Al,Ml and DL. Intrested in python and statistics and algotithms</p></div>
            </div>
            <div className={styles.list}>
                <div><img src={fronticon}></img></div>
                <div className={styles.domain}><h3>Frontend Developer</h3>
                <p>I'm a front-end developer with experience in building responsive and optimized sites with HTML, CSS and JS including libraries like react.js. </p></div>
            </div>
            <div className={styles.list}>
                <div><img src={backicon}></img></div>
                <div className={styles.domain}><h3>Backend Developer</h3><p>I can develop fast and optimised back-end systems and APIs using MERN</p></div>
            </div> 
            <div className={styles.list}>
                <div><img src={uiicon}></img></div>
                <div className={styles.domain}><h3>UI Designer</h3><p>I have designed multiple landing pages and have created design systems as well</p></div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default About
