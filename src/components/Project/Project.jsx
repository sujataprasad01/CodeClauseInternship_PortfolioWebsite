import React from 'react'
import styles from './Project.module.css'
import newsmonkey from '../../assets/projects/netflixclone.png'
import iNotebook from '../../assets/projects/inot.png'
import netflix from '../../assets/projects/newsmonkey.png'
import { Contact } from '../Contact/Contact'
const Project = () => {
  return (
    <>
   <section className={styles.container}>
    <h3 className={styles.title}>Recent Projects</h3>
    <div className={styles.projects}>
     <div className={styles.containerr}>
        <img src={iNotebook} className={styles.image}></img>
     <h4 className={styles.title}><span className={styles.coloredword}>iNotebook</span></h4>
        <p className={styles.description}>It is a full stack project that is notes keeping app, where you can keep your notes securely with creating an account.</p>
        <ul className={styles.skills}>
         <li className={styles.skill}>MongoDb</li>
         <li className={styles.skill}>Express</li>
         <li className={styles.skill}>React.js</li>
         <li className={styles.skill}>Node.js</li>
        </ul>
        <div className={styles.links}>
            {/* <a href='' className={styles.link}>Demo</a> */}
            <a href='' className={styles.link}>Source</a>
        </div>
     </div>
     <div className={styles.containerr}>
        <img src={netflix} className={styles.image}></img>
        <h4 className={styles.title}><span className={styles.coloredword}>News Website</span></h4>
        <p className={styles.description}>With JavaScript libraries at its core, NewsMonkey offers a quick and convenient way to access bite-sized daily news updates.</p>
        <ul className={styles.skills}>
         <li className={styles.skill}>React.js</li>
         <li className={styles.skill}>Node.js</li>
         <li className={styles.skill}>Express.js</li>
         <li className={styles.skill}>Html Css</li>
        </ul>
        <div className={styles.links}>
            {/* <a href='' className={styles.link}>Demo</a> */}
            <a href='https://github.com/sujataprasad01/NewsMonkey-React' className={styles.link}>Source</a>
        </div>
     </div>
     <div className={styles.containerr}>
        <img src={newsmonkey} className={styles.image}></img>
        <h4 className={styles.title}><span className={styles.coloredword}>Netflix Clone</span></h4>
        <p className={styles.description}>A Netflix-inspired website clone that demonstrates a remarkable level of creativity through its extensive use of CSS attributes</p>
        <ul className={styles.skills}>
         <li className={styles.skill}>HTML</li>
         <li className={styles.skill}>CSS</li>
         <li className={styles.skill}>JavaScript</li>
         <li className={styles.skill}>React.js</li>
        </ul>
        <div className={styles.links}>
            {/* <a href='' className={styles.link}>Demo</a> */}
            <a href='https://github.com/sujataprasad01/Netflix-Clone' className={styles.link}>Source</a>
        </div>
     </div>
    </div>
   </section>
    <div>
    <Contact></Contact>
    </div>
    </>
  )
}

export default Project
