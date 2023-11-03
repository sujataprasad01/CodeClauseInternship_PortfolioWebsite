import React from 'react'
import {getImageUrl} from '../../utils'

const ProjectCard = ({projects: {title, imageSrc, description,skills, demo,source}}) => {
  return (
    <div >
          <img src={getImageUrl(imageSrc)} alt={`image of ${title}`}></img>
          <h4>{title}</h4>
          <p>{description}</p>
          <ul>{
            skills.map((skill, id)=>{
                <li key={id}>{skill}</li>
            })}
          </ul>
          <div>
            <a href={demo}>Demo</a>
            <a href={source}>Source</a>
            </div>
          </div>
  );
  
}

export default ProjectCard
