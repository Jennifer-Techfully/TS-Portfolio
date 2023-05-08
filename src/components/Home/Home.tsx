import React from 'react'
import './Home.css'
import me from '../../img/me.png'



const Home:React.FC = () => {
 return (
    <div className='home' id="home">
       <div className='h-left'> 
          <div className='h-name'>
            <span>Hi,I Am</span>
            <span>Jennifer Christy</span>
            <span>I'm an Engineering graduate and I hold a Certification in FullStack Development.I'm currently working at Techfully as a Junior Java Developer.</span>
            <button><a href='#contact'>HIRE ME </a></button>
             {/* <button ><a href="file:///C:/Users/jenni/OneDrive/Documents/Resume-jenni.pdf" target="__blank">
            Download</a></button>*/}
          </div>
       </div>

        <div className='h-right'>
          <div className='h-picture'>
          <img src={me} alt=''></img>
          </div>
        </div>
    </div>
  )
}

export default Home