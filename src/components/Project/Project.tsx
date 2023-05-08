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
              <span>I have designed a E-ommerce Website for gym products.The commodities in the website is catagorized into Men's and Women's Apparels.The Technologies used are HTML,CSS,Javascript.</span>
             </div>
        </div>

       

        <div className='p-up'>
             <div className='p-left'>
              <img src={project2} alt='' />
             </div>
             <div className='p-right'>
              <span>React-js</span>
              <span>Personal Porfolio</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, pariatur optio numquam laborum ducimus veritatis velit temporibus earum. Tenetur provident quibusdam sunt cupiditate, quas quasi corrupti deserunt magnam assumenda. At?</span>
             </div>
        </div>

      </div>
    </div>
  )
}

export default Project