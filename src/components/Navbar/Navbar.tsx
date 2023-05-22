import React, { useState } from 'react'
import './Navbar.css'

import logo from '../../img/logo.png'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import ThemeToggle from '../ThemeToggle/ThemeToggle'


const Navbar:React.FC= () => {
  const [state,setState] = useState(false)
   
  return (
    
    <div className='nav' >
        <div className='n-left'>
          <a href='#home'>
           <img  src={logo}alt=''/>
          </a>
          <span>Jennifer</span>
          <ThemeToggle />
        </div>
        
     
        <div className={state ?'n-right-responsive' : 'n-right'} >
          <ul  onClick={()=> setState(false)} >
              <li ><a className ="active" href='#home'>Home </a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#project">Project </a></li>
              <li><a href="#skill">Skills </a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
          
       <button className='n-menu' onClick={()=> setState(!state)}>
       {state ?(<CloseOutlined/>):(<MenuOutlined/>)}
       </button>
      
  </div>
   
  )
}

export default Navbar