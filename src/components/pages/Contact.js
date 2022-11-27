import React from 'react';
import resume from '../../assets/Resume.pdf'
import resume_logo from '../../assets/images/resume.jpeg'
import email_logo from '../../assets/images/email.jpg'
import linkedin_logo from '../../assets/images/linkedin.jpg'
import github_logo from '../../assets/images/github.jpg'



export default function Contact() {
  return (
    <section className="title">
      <h1>Contact Me</h1>
      <br />
      <div className="contactLogos">
        <a href='mailto: a.huang232@gmail.com'><img className="logo_s" src={ email_logo } alt="phone" title="Email"/></a>

        <a href='https://www.linkedin.com/in/alan-huang3891/'><img className="logo_s" src={ linkedin_logo } alt="linkedin" title="LinkedIn" /></a>

        <a href='https://github.com/ahuang23'><img className="logo_s" src={ github_logo } alt="github" title="GitHub" /></a>

        <a href={ resume } download><img className="logo" src={ resume_logo } alt="resume" title="Resume" /></a>
      </div>
      <div className="contactForm">

      </div>

    </section>
  );
}
