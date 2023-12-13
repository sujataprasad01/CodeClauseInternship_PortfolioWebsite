import React from 'react'
import profile from '../../assets/hero/picofme (19).png';
import styles from './Hero.module.css';
import { Contact } from '../Contact/Contact';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
    <section className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.title}>Hi, I'm <span className={styles.coloredword}>Sujata</span></h2>
            <p className={styles.description}>
            I'm a versatile skilled in both MERN (MongoDB, Express.js, React.js, Node.js) Full-Stack Development and Data Science. If you're interested in collaborating, feel free to get in touch with me.
            </p>
            <Link to='/contact' className={styles.contactBtn}>Get In Touch</Link>
        </div>
        <img src={profile} alt='"Hero image of me' className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    <div>
    <Contact></Contact>
    </div>
    </>
  )
}

export default Hero
