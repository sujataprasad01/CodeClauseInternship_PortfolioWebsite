import React from 'react'
import skills from '../../Data/skills.json'
import images from '../../assets/skills/c-logo.png'
// import { getImageUrl } from '../../utils'
const Skills = () => {
  return (
    <section id='skills'>
        <h2>Skills</h2>
        <div>{
            skills.map((skill, id)=>{
               return (
               <div key={id}>
                <div><img src={images} alt='C++'></img>
                </div>
                <p>C++</p>
                </div>
               );
            })}</div>
    </section>
  )
}

export default Skills
