import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {GrInstagram} from 'react-icons/gr';
import {SiWhatsapp} from 'react-icons/si';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wsxnjl7', 'template_cbuo1kh', form.current, '-hZabQ8Vke9nL6Qvs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
   <section id='contact'>
    <h5>GET IN TOUCH</h5>
    <h2>CONTACT ME</h2>
    <div className="container contact__container">
      <div className="contact__options">
      
      
      <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>mishrapriyam2001@gmail.com</h5>
      <a href="mailto:mishrapriyam2001@gmail.com" target="_blank">
        Send A Email
      </a>
      </article>


      <article className="contact__option">
        <GrInstagram className='contact__option-icon'/>
      <h4>Instagram</h4>
      <h5>insta123</h5>
      <a href="" target="_blank">
        Send A Message
      </a>
      </article>


      <article className="contact__option">
        <SiWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>012-345-6789</h5>
      <a href="" target="_blank">
        Whatsapp Me
      </a>
      </article>


      </div>

      {/* ++++++++++++++END OF CONTACT OPTION+++++++++++++ */}
      <form ref={form} onSubmit={sendEmail}>
       <input type="text" name='name' placeholder='Your Full Name' required/>
       <input type="email" name='email' placeholder='Your Email' required/>
       <textarea name="message" rows="7" placeholder='Your Message' required />
       <button type='Submit' className='btn btn-primary' target="_blank">Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact