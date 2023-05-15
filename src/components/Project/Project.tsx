import React from 'react'
import './Project.css'
import project1 from '../../img/project1.jpg'
import project2 from '../../img/project2.png'

const Project:React.FC = () => {
  return (
    <div className='project' id='project'>
     <h1>PROJECTS</h1>
      <div className='p-main'>
        <div className='p-up'>
             <div className='p-left'>
               <img src={project1}alt=''></img>
             </div>
             <div className='p-right'>
              <span>UI&UX</span>
              <span>E-commerce  Website</span>
              <span>I have designed a E-ommerce Website for gym products.The commodities in the website is catagorized into Men-Women Apparels,Acessories,Gym Equipments.The Technologies used are HTML,CSS,Javascript.</span>
              <a href='https://github.com/Jennifer-christy/first-pro.git'>
                <button className='p-btn'>View</button>
              </a>
             </div>
        </div>

       

        <div className='p-up'>
             <div className='p-left'>
              <img src={project2} alt='' />
             </div>
             <div className='p-right'>
              <span>React-js</span>
              <span>Personal Porfolio</span>
              <span>I have created a Portfolio website using HTML,CSS,React Js.This project Comprises of Header,Footer,Content and further the content is divided into Four subdivisons such as Home,About,Projects and Contact.</span>
              <a href='https://jenniportfolio.netlify.app/'>
              <button className='p-btn btn2'> View </button></a>
             </div>
        </div>

      </div>
    </div>
  )
}

export default Project