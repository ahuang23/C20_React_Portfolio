
import projects from '../../project.json'

import React from 'react';
import Card from '../Card'


export default function Portfolio() {
  return (
    <div className="title">
      <br />
      <h1>PROJECTS</h1>
    <div>
      {projects.map((project) => 
      <Card name={project.name} description={project.description} id={project.id} image={project.image} skills={project.skills}/>
      )}
    </div>
    </div>
  );
}


