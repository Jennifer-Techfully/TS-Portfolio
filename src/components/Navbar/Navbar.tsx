import React from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'

const Navbar:React.FC= () => {
   
  return (
    
    <div className='nav'>
        <div className='n-left'>
            <img src={logo}alt=''/>
             <span>Jennifer</span>
        </div>
        <div className='n-right'>
            <ul>
             <li ><a className ="active" href='#home'>Home </a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#project">Project </a></li>
              <li><a href="#skill">Skills </a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
   /* </nav>*/
  )
}

export default Navbar