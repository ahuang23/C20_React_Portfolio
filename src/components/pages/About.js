import React from 'react';
import photo from '../../assets/images/photo.jpg';


export default function About() {
  return (
    <section className="title">
      <br />
      <h1>ALAN HUANG | FULL STACK WEB DEV</h1>
      <br />
      <br />
      <div>
        <center><img src={photo} className="photo" alt="alan_photo"></img></center>
      </div>
      <br />
      <br />
      <br />
      <p>
        A little about me - I'm from Southern California, born and raised. 
        I graduated from Cal State Long Beach in 2013 with a BA in Graphic Design. 
        I worked in the fashion industry as a designer for a few years until I transitioned into tech in 2016. 
        Currently, I am working as a System Test Engineer at Panasonic Avionics Corporation. 
        By joining this bootcamp, I hope to enhance my skillset so that I can be increase my hire-ability.  
      </p>
    </section>
  );
}
