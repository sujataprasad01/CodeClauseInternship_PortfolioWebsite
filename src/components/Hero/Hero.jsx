import React from 'react'
import profile from '../../assets/hero/picofme (19).png';
import styles from './Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sujata</h1>
            <p className={styles.description}>
            I'm a versatile skilled in both MERN (MongoDB, Express, React, Node.js) full-stack development and data science. If you're interested in collaborating, feel free to get in touch with me.
            </p>
            <a href='maito:sujataprasad2004@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={profile} alt='"Hero image of me' className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
