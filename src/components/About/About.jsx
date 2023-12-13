import React from 'react'
import styles from './About.module.css'
import aboutimg from '../../assets/about/5699949.png'
import fronticon from '../../assets/about/cursorIcon.png'
import backicon from '../../assets/about/serverIcon.png'
import uiicon from '../../assets/about/uiIcon.png'
import dsicon from '../../assets/about/datasc.png'
import { Contact } from '../Contact/Contact'
import Skills from '../Skills/Skills'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.aboutnavbar}>
      <h3 className={styles.title}>ABOUT</h3>
      </div>
     
      <div className={styles.content}>
        <div className={styles.image}>
            <img src={aboutimg}></img>
        </div>
        <div className={styles.description}>
        <Link to='/project'><div className={styles.list}>
                <div className={styles.ds}><img src={dsicon} ></img></div>
                <div className={styles.domain}><h3  className={styles.domain}><span className={styles.coloredword}>Data Scientist</span></h3><p>Currently working on Data Scientist with the domains under it like Al,Ml and DL. Intrested in python and statistics and algotithms</p></div>
            </div>
            </Link>
            <Link to='/project'><div className={styles.list}>
                <div><img src={backicon}></img></div>
                <div className={styles.domain}><h3  className={styles.domain}><span className={styles.coloredword}>Data Analyst</span></h3>
                <p>I'm a Data Analyst can explore, manipulate, visualise and do analysis on big datas</p></div>
            </div>
            </Link>
            <Link to='/project'><div className={styles.list}>
                <div><img src={fronticon}></img></div>
                <div className={styles.domain}><h3  className={styles.domain}><span className={styles.coloredword}>Full Stack Web Developer</span></h3><p>I can develop fast and optimised websites, experience in building responsive and optimized sites with Front-end tools and back-end systems and APIs using MERN</p></div>
            </div> 
            </Link>
            <Link to='/project'><div className={styles.list}>
                <div><img src={uiicon}></img></div>
                <div className={styles.domain}><h3  className={styles.domain}><span className={styles.coloredword}>UI Designer</span></h3><p>I have designed multiple landing pages and have created design systems as well</p></div>
            </div>
            </Link>
            
        </div>
      </div>
    </div>
    <div>

      <Skills></Skills>
    </div>
    <div>
    <Contact></Contact>
    </div>
    </>
  )
}

export default About
