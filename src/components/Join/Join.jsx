import { React, useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kg3folq', 'template_7b04w0w', form.current, '0rgAyv45v_CoILn_h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <div className='join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
            <span style={{textTransform: 'uppercase'}} className='stroke-text'>ready to</span>
            <span style={{textTransform: 'uppercase'}}>level up</span>
        </div>
        <div>
            <span style={{textTransform: 'uppercase'}}>your body</span>
            <span style={{textTransform: 'uppercase'}} className='stroke-text'>with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Enter your email address' />
            <button className='btn btn-join'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join;
