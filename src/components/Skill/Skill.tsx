import React from 'react'
import './Skill.css'

const Skill:React.FC = () => {
  return (
  <div className='skill' id='skill'>
    <div className='s-main'>
     <h1>SKILLS</h1>

       <li>
        <h3>Html </h3>
        <span className='s-bar'><span className='html'></span></span>
       </li>
       <li>
        <h3>css</h3>
        <span className='s-bar'><span className='css'></span></span>
       </li>
       <li>
        <h3>bootstrap</h3>
        <span className='s-bar'><span className='bootstrap'></span></span>
       </li>
       <li>
        <h3>Javascript</h3>
        <span className='s-bar'><span className='js'></span></span>
       </li>
       <li>
        <h3>React js</h3>
        <span className='s-bar'><span className='react'></span></span>
       </li>

    </div>
  </div>
   
  )
}

export default Skill