import React from 'react';
import resume from '../../assets/Resume.pdf'
import resume_logo from '../../assets/images/resume.jpeg'
import { Row, Col } from 'react-bootstrap';


export default function Resume() {
    return (
      <section className="title">
        <br />
        <h1>RESUME</h1>
        <br />
        <div className="resumeLogos">
        
        <a href={ resume } download><img className="logo" src={ resume_logo } alt="resume" title="Resume" /></a><p>Download Resume</p> 
        </div>
        <br />
        <div>
            <Row>
                <Col lg={4} md={12}>
                    <h2>FRONT END</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>React</li>
                    </ul>
                </Col>
                <Col lg={4} md={12}>
                    <h2>BACK END</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                        <li>REST API's</li>
                    </ul>    
                </Col>
                <Col lg={4} md={12}>
                    <h2>EDUCATION</h2>
                    <ul>
                        <li><strong>California State University Long Beach</strong></li>
                            <ul>
                                <li>B.A. - Graphic Design</li>
                            </ul>

                        <br />

                        <li><strong>UC Irvine School of Continuing Education</strong></li>
                            <ul>
                                <li>Full Stack Web Development Certificate</li>
                            </ul>
                    </ul>
                </Col>
            </Row>
        </div>

  
  
  
      </section>
    );
  }
  