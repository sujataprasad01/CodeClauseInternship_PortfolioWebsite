import React from 'react'
import styles from './Skills.module.css'
import cpp from '../../assets/skills/c-.png'
import c from '../../assets/skills/c-document.png'
import dsa from '../../assets/skills/algorithm.png'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css-file.png'
import js from '../../assets/skills/java-script (1).png'
import mongo from '../../assets/skills/icons8-mongo-db-64.png'
import react from '../../assets/skills/library.png'
import node from '../../assets/skills/nodejs.png'
import python from '../../assets/skills/python.png'
import pandas from '../../assets/skills/icons8-pandas-48.png'
import numpy from '../../assets/skills/icons8-numpy-48.png'
import rg from '../../assets/skills/icons8-regular-expressions-16.png'
import redux from '../../assets/skills/icons8-redux-50.png'
import git from '../../assets/skills/git.png'
import github from '../../assets/skills/code.png'
import sql from '../../assets/skills/database.png'
import figma from '../../assets/skills/figma.png'
import dbms from '../../assets/skills/query.png'
import dl from '../../assets/skills/deep-learning.png'
import ml from '../../assets/skills/ml.png'
import vs from '../../assets/skills/visual-studio.png'
import linux from '../../assets/skills/linux.png'

import { Contact } from '../Contact/Contact'
const Skills = () => {
  return (
    <>
    <div className={styles.container}>
    <h3 className={styles.title}> SKILLS</h3>
    <div className={styles.items}>
      <img src={cpp} className={styles.skillitem} title='C++'></img>
      <img src={c} className={styles.skillitem} title='C'></img>
      <img src={dsa} className={styles.skillitem} title='DSA'></img>
      <img src={html} className={styles.skillitem} title='HTML'></img>
      <img src={css} className={styles.skillitem} title='CSS'></img>
      <img src={js} className={styles.skillitem} title='Javascript'></img>
      <img src={mongo} className={styles.skillitem} title='MongoDb'></img>
      <img src={react} className={styles.skillitem} title='React.js'></img>
      <img src={node} className={styles.skillitem} title='Node.js'></img>
      <img src={python} className={styles.skillitem} title='Python'></img>
      <img src={numpy} className={styles.skillitem} title='Numpy'></img>
      <img src={pandas} className={styles.skillitem} title='Pandas'></img>
      {/* <img src={rg} className={styles.skillitem} title='Regular Expression'></img> */}
      {/* <img src={redux} className={styles.skillitem} title='Redux'></img> */}
      <img src={git} className={styles.skillitem} title='Git'></img>
      <img src={github} className={styles.skillitem} title='Github'></img>
      <img src={figma} className={styles.skillitem} title='Figma'></img>
      <img src={dbms} className={styles.skillitem} title='DBMS'></img>
      <img src={dl} className={styles.skillitem} title='DL'></img>
      <img src={ml} className={styles.skillitem} title='ML'></img>
      <img src={sql} className={styles.skillitem} title='SQL'></img>
      <img src={vs} className={styles.skillitem} title='Visual Studio'></img>
      <img src={linux} className={styles.skillitem} title='Linux'></img>
      </div>

    </div>
    <div>
    <Contact></Contact>
    </div>
    </>
  )
}

export default Skills
