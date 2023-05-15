import React, { useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'; 
import { MailOutlined } from '@ant-design/icons';


/*const Contact = () => {
  const form=useRef<HTMLFormElement>(null);
  const [done,setDone]=React.useState(false)
  
  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_fryxp4n', 'template_1fcstqe', e.currentTarget , 'U5dVgwU1H6ah1KghB')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset()
    
};*/
  
  type Props = {
    done: boolean;
    setDone: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const Contact= ({done,setDone}:Props) => {
    const form=useRef<HTMLFormElement>(null);
    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fryxp4n', 'template_1fcstqe', e.currentTarget , 'U5dVgwU1H6ah1KghB')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        e.currentTarget.reset()
      };


  return (
    <div className='contact' id='contact'>
      <div className='c-main'>
        <div className='c-left'>
           <span>CONTACT ME</span>
           <span><MailOutlined /> jenniferchristy06@gmail.com</span>
        </div>
        <div className='c-right'>
         <form ref={form } onSubmit={sendEmail}>
          <input type='text' name='user_name' className='user' placeholder='Name'/>
          <input type='email' name='user_email' className='user' placeholder='Email'/>
          <input type='text' name='user_subject' className='user' placeholder='Subject'/>
          <textarea name='message' className='user' placeholder='Message' />
          <input type='submit'value='send' className='button'/>
          <span>{done && 'Thank you for contacting me !'}</span>
         </form>
        </div>
      </div>
    </div>
  )
}

export default Contact