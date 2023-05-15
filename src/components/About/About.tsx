import React from 'react'
import './About.css'
import about from '../../img/about.png'
import about2 from '../../img/about2.jpg'
import resume from '../../assets/resume.pdf';

const About:React.FC = () => {
  return (
  <div className='about' id='about'>
   <img src={about} alt='' style={{width:'100%'}}/>
     <div className='a-main'>
        <img src={about2}alt=""/>
        <div className='a-text'>
          <span>ABOUT ME</span>
          <span>I am a computer science engineering graduate. I did my studies in Coimbatore. 
                Then I moved to Chennai to pursue my career. My first interview was with Sutherland global services,and I got selected as a technical support associate. 
                My job role was to assist customers with their software-related issues.
                I mostly dealt with US & Canadian customers. In the beginning, it was challenging for me as it was a complete night shift job, However, in time I was able to adapt to the new work environment.  
                While working I grew an interest in Web Development and I wanted to do a full-time course in it.I worked for 3 years and 7 months in Sutherland and I finally got the opportunity to pursue my dream career. I did a course in web development from Besant Technologies Chennai and I'm Currently working as Junior Java Developer at Techfully.
          </span>
          <div className='resume'>
            <a href={resume} download>
             <button className='r-btn' >RESUME</button>
            </a>
          </div>
        </div>
        
      </div>
  </div>

  )
}

export default About