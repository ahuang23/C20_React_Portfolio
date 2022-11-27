import React from 'react';
import email_logo from '../assets/images/email.jpg'
import linkedin_logo from '../assets/images/linkedin.jpg'
import github_logo from '../assets/images/github.jpg'

function Footer() {
    return (
    <footer class="foot">
        <p> 

        <a href='https://www.linkedin.com/in/alan-huang3891/'><img className="logo_s" src={ linkedin_logo } alt="linkedin" title="LinkedIn" /></a>

        <a href='https://github.com/ahuang23'><img className="logo_s" src={ github_logo } alt="github" title="GitHub" /></a>

      </p>  
    </footer>
    )
};

export default Footer;