import React from 'react';
import resume from '../../assets/Resume.pdf'
import resume_logo from '../../assets/images/resume.jpeg'


export default function Resume() {
    return (
      <section className="title">
        <br />
        <h1>RESUME</h1>
        <br />
        <div className="resumeLogos">
        
        <a href={ resume } download><img className="logo" src={ resume_logo } alt="resume" title="Resume" /></a><p>Download Resume</p> 
  
        </div>

  
  
  
      </section>
    );
  }
  