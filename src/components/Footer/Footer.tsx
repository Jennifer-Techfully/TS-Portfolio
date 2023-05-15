import React from 'react'
import './Footer.css'
import footer from '../../img/footer.jpg'
import { InstagramFilled,LinkedinFilled ,GithubFilled} from '@ant-design/icons'


const Footer:React.FC = () => {
  return (
    <div className='footer'>
      <img src={footer}alt='' style={{width:'100%',height:"6rem",}}/>
      <div className='f-content'>
       <span>jenniferchristy06@gmail.com</span>
       <div className='f-icons'>
         <a href='https://www.instagram.com/jenniferchristy06/'>
          <InstagramFilled/>
         </a>
         <a href='https://github.com/Jennifer-christy'>
          <GithubFilled/>
         </a>
         <a href='https://www.linkedin.com/in/jennifer-christy-ba9ab5255?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVVNaodFkRImuf3KQUgwBAA%3D%3D'>
          <LinkedinFilled/>
         </a>
       </div>
      </div>
    </div>
  )
}

export default Footer