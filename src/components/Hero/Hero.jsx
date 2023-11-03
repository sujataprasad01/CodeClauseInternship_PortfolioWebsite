import React from 'react'
import profile from '../../assets/hero/picofme (19).png';
import styles from './Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.title}>Hi, I'm Sujata</h2>
            <p className={styles.description}>
            I'm a versatile skilled in both MERN (MongoDB, Express, React, Node.js) Full-Stack Development and Data Science. If you're interested in collaborating, feel free to get in touch with me.
            </p>
            <a href='maito:sujataprasad2004@gmail.com' className={styles.contactBtn}>Get In Touch</a>
        </div>
        <img src={profile} alt='"Hero image of me' className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
